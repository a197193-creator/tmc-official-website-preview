(() => {
  // Preserve earlier shared links after moving these sections to dedicated pages.
  const oldPage = location.pathname.split('/').pop() || 'index.html';
  const oldRoutes = {
    'index.html#news': 'news.html',
    'index.html#recognition': 'news.html?search=BMCC',
    'index.html#contact': 'contact.html',
    'about.html#contact-us': 'contact.html',
    'about.html#location-map': 'contact.html#location'
  };
  const destination = oldRoutes[oldPage + location.hash];
  if (destination) {
    location.replace(destination);
    return;
  }
  const menu = document.querySelector('.tmc-menu');
  const mainNav = document.querySelector('.tmc-nav');
  if (menu && mainNav) {
    document.documentElement.classList.add('tmc-menu-ready');
    const setMenu = (open) => {
      menu.setAttribute('aria-expanded', String(open));
      mainNav.classList.toggle('is-open', open);
    };
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    mainNav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    window.matchMedia('(max-width: 760px)').addEventListener('change', () => setMenu(false));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });
  }

  const malayIntroduction = document.getElementById('bahasa-melayu');
  if (malayIntroduction) {
    const openMalay = () => {
      if (location.hash === '#bahasa-melayu') malayIntroduction.open = true;
    };
    openMalay();
    window.addEventListener('hashchange', openMalay);
    document.querySelectorAll('a[href="#bahasa-melayu"]').forEach((link) => {
      link.addEventListener('click', () => { malayIntroduction.open = true; });
    });
  }

  const videoLink = document.querySelector('.intro-video-trigger');
  if (videoLink) {
    videoLink.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const frame = document.createElement('iframe');
      const videoId = new URL(videoLink.href).searchParams.get('v');
      frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
      frame.title = 'The Malaysian Cohort project film, 2010';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture';
      frame.allowFullscreen = true;
      videoLink.replaceWith(frame);
      frame.focus();
    });
  }

  const grid = document.querySelector('#resource-grid');
  const input = document.querySelector('#resource-search');
  const count = document.querySelector('#resource-count');
  const empty = document.querySelector('#resource-empty');
  const clear = document.querySelector('#resource-clear');
  if (!grid || !input || !count || !empty) return;

  const normalize = (value) => value.toLocaleLowerCase().normalize('NFD')
    .replace(/\p{M}/gu, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const filter = () => {
    const query = normalize(input.value).split(' ').filter(Boolean);
    let visible = 0;
    for (const card of grid.querySelectorAll('.resource-card')) {
      const content = normalize(`${card.dataset.search || ''} ${card.textContent}`);
      const match = query.every((word) => content.includes(word));
      card.hidden = !match;
      if (match) visible += 1;
    }
    count.textContent = `${visible} ${visible === 1 ? 'result' : 'results'}`;
    empty.hidden = visible !== 0;
  };
  input.addEventListener('input', filter);
  if (clear) {
    clear.hidden = false;
    clear.addEventListener('click', () => {
      input.value = '';
      filter();
      input.focus();
    });
  }
  filter();

  // The HTML links remain available if the PHP function is unavailable offline.
  fetch('api/resources.php?v=5', { headers: { Accept: 'application/json' } })
    .then((response) => {
      if (!response.ok) throw new Error('Resource endpoint unavailable');
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data.resources) || data.resources.length === 0) return;
      const cards = data.resources.map((item) => {
        if (!item || typeof item.url !== 'string') return null;
        const internal = /^(?:index|introduction|about|participants|research|news|contact|resources)\.html(?:#[a-z0-9-]+)?$/.test(item.url);
        const external = /^https:\/\/www\.ukm\.my\/mycohort\//.test(item.url);
        if (!internal && !external) return null;
        const card = document.createElement('a');
        card.className = 'resource-card';
        card.href = item.url;
        if (external) {
          card.target = '_blank';
          card.rel = 'noopener noreferrer';
        }
        card.dataset.search = item.search || '';
        const title = document.createElement('strong');
        title.textContent = item.title;
        const description = document.createElement('small');
        description.textContent = item.description;
        const arrow = document.createElement('b');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = internal ? '→' : '↗';
        card.append(title, description, arrow);
        return card;
      }).filter(Boolean);
      if (cards.length > 0 && !grid.contains(document.activeElement)) {
        grid.replaceChildren(...cards);
        filter();
      }
    })
    .catch(() => {});
})();
