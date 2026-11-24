(() => {
  const archive = document.querySelector('[data-archive]');
  if (!archive) return;

  const prefix = archive.dataset.archive;
  const item = archive.dataset.archiveItem;
  const get = name => document.getElementById(`${prefix}-${name}`);
  const search = get('search');
  const year = get('year');
  const category = get('category');
  const count = get('count');
  const empty = get('empty');
  const pagination = get('pagination');
  const pageSelect = get('page');
  const previous = get('previous');
  const next = get('next');
  const pageSize = 12;
  const normalize = value => value.toLocaleLowerCase('en').normalize('NFKD')
    .replace(/\p{M}/gu, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const cards = [...archive.querySelectorAll('[data-search]')].map(element => ({
    element,
    year: element.dataset.year,
    category: element.dataset.category,
    searchable: normalize(element.dataset.search),
  }));
  if (!cards.length) return;

  let page = 1;

  function loadLocation() {
    const parameters = new URLSearchParams(location.search);
    search.value = parameters.get('search') || '';
    for (const [select, name] of [[year, 'year'], [category, 'category']]) {
      const rawValue = parameters.get(name);
      select.value = [...select.options].some(option => option.value === rawValue) ? rawValue : 'all';
    }
    const requestedPage = Number(parameters.get('page'));
    page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  }

  function saveLocation() {
    const url = new URL(location.href);
    const filters = {
      search: search.value.trim(),
      year: year.value === 'all' ? '' : year.value,
      category: category.value === 'all' ? '' : category.value,
      page: page === 1 ? '' : String(page),
    };
    for (const [name, value] of Object.entries(filters)) {
      if (value) url.searchParams.set(name, value);
      else url.searchParams.delete(name);
    }
    if (url.href !== location.href) history.replaceState(history.state, '', url);
  }

  function update() {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const matches = cards.filter(card => (year.value === 'all' || card.year === year.value)
      && (category.value === 'all' || card.category === category.value)
      && words.every(word => card.searchable.includes(word)));
    const pages = Math.max(1, Math.ceil(matches.length / pageSize));
    page = Math.min(pages, Math.max(1, page));
    const start = (page - 1) * pageSize;
    const end = Math.min(start + pageSize, matches.length);
    const visible = new Set(matches.slice(start, end));

    for (const card of cards) card.element.hidden = !visible.has(card);
    if (matches.length === 0) count.textContent = `No ${item}s found`;
    else if (matches.length === 1) count.textContent = `Showing 1 ${item}`;
    else count.textContent = `Showing ${start + 1}–${end} of ${matches.length} ${item}s`;
    empty.hidden = matches.length !== 0;
    pagination.hidden = pages === 1;
    previous.disabled = page === 1;
    next.disabled = page === pages;

    if (pageSelect.options.length !== pages) {
      pageSelect.replaceChildren(...Array.from({ length: pages }, (_, index) => {
        const option = document.createElement('option');
        option.value = String(index + 1);
        option.textContent = `${index + 1} of ${pages}`;
        return option;
      }));
    }
    pageSelect.value = String(page);
  }

  function updateFilters() {
    page = 1;
    update();
    saveLocation();
  }

  function resetFilters() {
    search.value = '';
    year.value = 'all';
    category.value = 'all';
    updateFilters();
    search.focus();
  }

  function changePage(value) {
    page = value;
    update();
    saveLocation();
    count.focus();
  }

  search.addEventListener('input', updateFilters);
  year.addEventListener('change', updateFilters);
  category.addEventListener('change', updateFilters);
  archive.querySelectorAll('[data-archive-reset]').forEach(button => {
    button.addEventListener('click', resetFilters);
  });
  previous.addEventListener('click', () => changePage(page - 1));
  next.addEventListener('click', () => changePage(page + 1));
  pageSelect.addEventListener('change', () => changePage(Number(pageSelect.value)));
  window.addEventListener('popstate', () => {
    loadLocation();
    update();
  });

  loadLocation();
  update();
  get('toolbar').hidden = false;
})();
