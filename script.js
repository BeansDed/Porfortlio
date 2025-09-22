(function () {
  document.documentElement.classList.remove('no-js');

  // Elements
  const yearEl = document.getElementById('year');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const themeToggle = document.getElementById('themeToggle');
  const backToTop = document.getElementById('backToTop');
  const projectsGrid = document.getElementById('projectsGrid');
  const searchInput = document.getElementById('search');
  const segmented = document.querySelector('.segmented');
  const starsCount = document.getElementById('starsCount');
  const commitsCount = document.getElementById('commitsCount');

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && e.target !== navToggle) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth back to top
  if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Theme
  const THEME_KEY = 'ardre_theme_pref';
  function setTheme(mode) {
    if (mode === 'light') {
      document.documentElement.classList.add('light');
      themeToggle && (themeToggle.textContent = '☀️');
    } else {
      document.documentElement.classList.remove('light');
      themeToggle && (themeToggle.textContent = '🌙');
    }
    localStorage.setItem(THEME_KEY, mode);
  }
  const storedTheme = localStorage.getItem(THEME_KEY);
  setTheme(storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  themeToggle && themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
  });

  // ------ Auto Projects (no code edits required) ------
  // Repos are pulled from these users. Add/remove "featured" topic in GitHub to control visibility.
  const USERS = ['BeansDed', 'penniepennie', 'MarkKheanViari'];
  const FEATURE_TOPIC = 'featured';
  const CACHE_KEY = 'ardre_featured_repos_v1';
  const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

  function langToKey(lang) {
    const l = (lang || '').toLowerCase();
    if (l.includes('python')) return 'python';
    if (l.includes('javascript') || l.includes('typescript')) return 'javascript';
    if (l.includes('dart')) return 'dart';
    if (l.includes('java') || l.includes('kotlin')) return 'java';
    return l || 'other';
  }

  async function fetchUserRepos(user, page = 1) {
    const url = `https://api.github.com/users/${user}/repos?per_page=100&type=owner&sort=updated&page=${page}`;
    const res = await fetch(url, { headers: { 'Accept': 'application/vnd.github+json' } });
    if (!res.ok) throw new Error(`GitHub API error (${user}): ${res.status}`);
    const data = await res.json();
    return data;
  }

  async function fetchAllUsersRepos() {
    const all = [];
    for (const u of USERS) {
      let page = 1;
      while (true) {
        try {
          const chunk = await fetchUserRepos(u, page);
          if (!Array.isArray(chunk) || chunk.length === 0) break;
          all.push(...chunk);
          if (chunk.length < 100) break;
          page++;
        } catch (e) {
          break;
        }
      }
    }
    return all;
  }

  function filterFeatured(list) {
    return list.filter(repo => {
      const topics = repo.topics || [];
      const hasTopic = topics.map(t => (t || '').toLowerCase()).includes(FEATURE_TOPIC);
      const fallback = (repo.description || '').toLowerCase().includes('[featured]') || repo.name.toLowerCase().includes('featured');
      return hasTopic || fallback;
    });
  }

  function toCardModel(r) {
    return {
      name: r.name,
      description: r.description || 'No description provided.',
      html_url: r.html_url,
      stargazers_count: r.stargazers_count || 0,
      forks_count: r.forks_count || 0,
      updated_at: r.updated_at,
      language: (r.language || '').toLowerCase(),
      topics: r.topics || [],
      languages: [],
      owner: r.owner?.login || '',
      repo: r.name,
    };
  }

  function renderProjects(list) {
    projectsGrid.innerHTML = '';
    if (!list.length) {
      projectsGrid.innerHTML = '<p>No featured projects yet. Add the <code>featured</code> topic to any repo in GitHub to show it here.</p>';
      return;
    }
    const fragment = document.createDocumentFragment();
    list.forEach(item => {
      const card = document.createElement('a');
      card.className = 'project-card';
      card.href = item.html_url;
      card.target = '_blank';
      card.rel = 'noreferrer';

      const title = document.createElement('h3');
      title.textContent = item.name;

      const desc = document.createElement('p');
      desc.textContent = item.description;

      const badges = document.createElement('div');
      badges.className = 'badges';
      const lang = document.createElement('span');
      const key = langToKey(item.language);
      lang.textContent = key ? key.charAt(0).toUpperCase() + key.slice(1) : 'Other';
      badges.appendChild(lang);
      if (item.topics && item.topics.length) {
        const s = document.createElement('span'); s.textContent = `#${item.topics[0]}`; badges.appendChild(s);
      }

      const footer = document.createElement('div');
      footer.className = 'card-footer';
      const counts = document.createElement('div');
      counts.className = 'counter';
      counts.textContent = `★ ${item.stargazers_count}   ⑂ ${item.forks_count}`;
      const updated = document.createElement('div');
      updated.className = 'counter';
      updated.textContent = item.updated_at ? ('Updated ' + new Date(item.updated_at).toLocaleDateString()) : '';

      footer.appendChild(counts);
      footer.appendChild(updated);

      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(badges);
      card.appendChild(footer);
      fragment.appendChild(card);
    });
    projectsGrid.appendChild(fragment);
  }

  function applyFilters(data) {
    const q = (searchInput.value || '').toLowerCase().trim();
    const activeSeg = segmented.querySelector('.seg.active');
    const lang = activeSeg ? activeSeg.dataset.lang : 'all';

    let filtered = data;
    if (q) {
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(q) ||
        (d.description || '').toLowerCase().includes(q) ||
        (d.topics || []).some(t => t.toLowerCase().includes(q))
      );
    }
    if (lang && lang !== 'all') {
      filtered = filtered.filter(d => {
        const key = langToKey(d.language);
        return key === lang;
      });
    }
    renderProjects(filtered);
  }

  async function hydrateProjects() {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
      const now = Date.now();
      if (cached && (now - cached.savedAt < CACHE_TTL_MS)) {
        starsCount && (starsCount.textContent = String(cached.stats.totalStars || 0));
        commitsCount && (commitsCount.textContent = String(cached.stats.recentUpdated || 0));
        renderProjects(cached.data);
        searchInput && searchInput.addEventListener('input', () => applyFilters(cached.data));
        segmented && segmented.addEventListener('click', (e) => {
          const b = e.target.closest('button.seg');
          if (!b) return;
          segmented.querySelectorAll('.seg').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          applyFilters(cached.data);
        });
      }
    } catch {}

    try {
      const repos = await fetchAllUsersRepos();
      const featured = filterFeatured(repos).map(toCardModel);

      const totalStars = featured.reduce((s, r) => s + (r.stargazers_count || 0), 0);
      const recentUpdated = featured.filter(r => !!r.updated_at).length;
      starsCount && (starsCount.textContent = String(totalStars));
      commitsCount && (commitsCount.textContent = String(recentUpdated));

      renderProjects(featured);

      searchInput && searchInput.addEventListener('input', () => applyFilters(featured));
      segmented && segmented.addEventListener('click', (e) => {
        const b = e.target.closest('button.seg');
        if (!b) return;
        segmented.querySelectorAll('.seg').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        applyFilters(featured);
      });

      localStorage.setItem(CACHE_KEY, JSON.stringify({
        savedAt: Date.now(),
        data: featured,
        stats: { totalStars, recentUpdated }
      }));
    } catch (e) {
      if (!projectsGrid.innerHTML) {
        projectsGrid.innerHTML = '<p>Could not load GitHub projects right now. Please refresh later.</p>';
      }
    }
  }

  hydrateProjects();

  // Contact form (client-side demo only)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let ok = true;
      function err(el, id, msg) {
        const s = document.getElementById(id);
        if (msg) { s.textContent = msg; ok = false; } else { s.textContent = ''; }
      }
      err(name, 'err-name', name.value.trim() ? '' : 'Name is required.');
      err(email, 'err-email', (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ? '' : 'Valid email required.'));
      err(message, 'err-message', message.value.trim() ? '' : 'Message is required.');
      if (!ok) return;
      status.textContent = 'Thanks! Your message has been queued.';
      form.reset();
      setTimeout(() => status.textContent = '', 3000);
    });
  }
})();
