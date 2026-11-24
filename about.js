(() => {
  const search = document.getElementById('staff-search');
  const division = document.getElementById('staff-division');
  const cards = Array.from(document.querySelectorAll('.staff-card'));
  const count = document.getElementById('staff-count');
  const empty = document.getElementById('staff-empty');
  const showAll = document.getElementById('staff-show-all');
  const form = search?.form;
  if (!form || !division || !cards.length || !count || !empty || !showAll) return;

  let expanded = false;
  const initialLimit = 9;
  const normalize = value => value.toLocaleLowerCase('en')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const searchText = new Map(cards.map(card => [
    card, normalize(`${card.dataset.search} ${card.textContent}`)
  ]));

  function filterDirectory() {
    const query = normalize(search.value);
    const words = query.split(' ').filter(Boolean);
    const filtering = Boolean(query || division.value !== 'all');
    const matches = cards.filter(card => {
      const text = searchText.get(card);
      return (division.value === 'all' || card.dataset.division === division.value)
        && words.every(word => text.includes(word));
    });
    const visible = new Set(filtering || expanded ? matches : matches.slice(0, initialLimit));
    cards.forEach(card => { card.hidden = !visible.has(card); });
    empty.hidden = matches.length > 0;
    showAll.hidden = filtering || matches.length <= initialLimit;
    showAll.textContent = expanded ? 'Show fewer people' : `Show all ${cards.length} people`;
    showAll.setAttribute('aria-expanded', String(expanded));
    count.textContent = filtering
      ? `${matches.length} ${matches.length === 1 ? 'person' : 'people'} found`
      : `Showing ${visible.size} of ${cards.length} people`;
  }

  search.addEventListener('input', filterDirectory);
  division.addEventListener('change', filterDirectory);
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', event => {
    event.preventDefault();
    search.value = '';
    division.value = 'all';
    expanded = false;
    filterDirectory();
    search.focus();
  });
  showAll.addEventListener('click', () => {
    expanded = !expanded;
    filterDirectory();
    if (expanded) cards[initialLimit]?.querySelector('a')?.focus();
  });
  document.querySelectorAll('[data-select-division]').forEach(button => {
    button.addEventListener('click', () => {
      search.value = '';
      division.value = button.dataset.selectDivision;
      expanded = false;
      filterDirectory();
      document.getElementById('directory').scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
      division.focus({ preventScroll: true });
    });
  });
  form.hidden = false;
  filterDirectory();
})();
