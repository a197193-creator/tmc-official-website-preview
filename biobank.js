(() => {
  const videoButton = document.getElementById('biobank-video-play');
  const videoStage = document.getElementById('biobank-video-stage');

  if (videoButton && videoStage) {
    videoButton.hidden = false;
    videoButton.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/B0-j-QvXvPM?start=1&autoplay=1';
      iframe.title = 'Biobank video published by UKM MyCohort';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      videoStage.replaceChildren(iframe);
      iframe.focus();
    });
  }

  const rows = [...document.querySelectorAll('[data-publication-row]')];
  if (!rows.length) return;

  const filters = document.getElementById('publication-filters');
  const search = document.getElementById('publication-search');
  const year = document.getElementById('publication-year');
  const status = document.getElementById('publication-status');
  const count = document.getElementById('publication-count');
  const empty = document.getElementById('publication-empty');
  const pagination = document.getElementById('publication-pagination');
  const previous = document.getElementById('publication-previous');
  const next = document.getElementById('publication-next');
  const pageLabel = document.getElementById('publication-page-label');
  const pagePicker = document.getElementById('publication-page');
  const pageSize = 6;
  const searchable = value => value.toLocaleLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
  const searchIndex = rows.map(row => searchable(row.dataset.search));

  let currentPage = 0;
  let filtered = rows;
  filters.hidden = false;

  function render() {
    const pageCount = Math.ceil(filtered.length / pageSize);
    const start = currentPage * pageSize;
    const visible = new Set(filtered.slice(start, start + pageSize));
    rows.forEach(row => { row.hidden = !visible.has(row); });
    if (filtered.length === 0) count.textContent = 'No matching records';
    else if (filtered.length === 1) count.textContent = 'Showing 1 record';
    else count.textContent = `Showing ${start + 1}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length} records`;
    empty.hidden = filtered.length !== 0;
    pagination.hidden = pageCount < 2;
    previous.disabled = currentPage === 0;
    next.disabled = currentPage >= pageCount - 1;
    pageLabel.textContent = `of ${pageCount}`;

    if (pagePicker.options.length !== pageCount) {
      pagePicker.replaceChildren(...Array.from({ length: pageCount }, (_, index) => new Option(index + 1, index)));
    }
    pagePicker.value = currentPage;
  }

  function filter() {
    const terms = searchable(search.value.trim()).split(/\s+/).filter(Boolean);
    filtered = rows.filter((row, index) =>
      terms.every(term => searchIndex[index].includes(term)) &&
      (year.value === 'all' || row.dataset.year === year.value) &&
      (status.value === 'all' || row.dataset.status === status.value)
    );
    currentPage = 0;
    render();
  }

  function showPage(page) {
    currentPage = page;
    render();
    count.focus();
  }

  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
  status.addEventListener('change', filter);
  filters.addEventListener('submit', event => event.preventDefault());
  document.getElementById('publication-reset').addEventListener('click', () => {
    filters.reset();
    filter();
    search.focus();
  });
  previous.addEventListener('click', () => showPage(currentPage - 1));
  next.addEventListener('click', () => showPage(currentPage + 1));
  pagePicker.addEventListener('change', () => showPage(Number(pagePicker.value)));
  filter();
})();
