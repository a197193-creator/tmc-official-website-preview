(() => {
  const toggle = document.getElementById('participant-topics-toggle');
  const topics = document.getElementById('participant-topic-links');
  if (!toggle || !topics) return;
  const page = toggle.closest('.participants-page');
  const mobile = window.matchMedia('(max-width: 899px)');
  const links = Array.from(topics.querySelectorAll('a'));
  const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if (!page || !sections.length) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    topics.classList.toggle('topics-collapsed', !open);
  }
  page.classList.add('topics-ready');
  setOpen(!mobile.matches);
  mobile.addEventListener('change', () => setOpen(!mobile.matches));
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  topics.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (mobile.matches) setOpen(false);
    const section = document.getElementById(link.hash.slice(1));
    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  function markActive(id) {
    links.forEach(link => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  let scrollFrame = 0;
  function updateLocation() {
    scrollFrame = 0;
    const readingLine = Math.min(105, window.innerHeight * .25);
    const active = sections.find(section => section.getBoundingClientRect().bottom > readingLine);
    markActive((active || sections.at(-1)).id);
  }
  function requestLocationUpdate() {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateLocation);
  }
  window.addEventListener('scroll', requestLocationUpdate, { passive: true });
  window.addEventListener('resize', requestLocationUpdate);
  window.addEventListener('hashchange', requestLocationUpdate);
  updateLocation();
})();
