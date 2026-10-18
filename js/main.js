// Smile Sessions — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initPlaylists();
});

function initNav() {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Highlight active nav link based on current page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach((a) => {
    if (a.dataset.page === current) a.classList.add('active');
  });
}

function initPlaylists() {
  const grid = document.getElementById('playlist-grid');
  const filterBar = document.getElementById('filter-bar');
  if (!grid || typeof SMILE_SESSIONS_PLAYLISTS === 'undefined') return;

  // Cycle through the mood-card color classes defined in css/style.css
  const colorClasses = ['mood-1', 'mood-2', 'mood-3', 'mood-4', 'mood-5', 'mood-6'];
  const colorByMood = {};
  const moods = []; // unique moods, in order of first appearance

  SMILE_SESSIONS_PLAYLISTS.forEach((p) => {
    if (!(p.moodKey in colorByMood)) {
      colorByMood[p.moodKey] = colorClasses[moods.length % colorClasses.length];
      moods.push({ key: p.moodKey, label: p.moodLabel, emoji: p.moodEmoji });
    }
  });

  // Build the filter chips: "All Playlists" + one per unique mood
  if (filterBar) {
    const allChip = '<button class="chip active" data-filter="all">All Playlists</button>';
    const moodChips = moods
      .map((m) => `<button class="chip" data-filter="${m.key}">${m.emoji} ${m.label}</button>`)
      .join('');
    filterBar.innerHTML = allChip + moodChips;
  }

  // Small recognizable icon per platform; anything unlisted falls back to a music note
  const platformIcons = {
    spotify: '🎧',
    soundcloud: '☁️',
    youtube: '▶️',
    'apple music': '🎵'
  };
  const iconFor = (platform) => platformIcons[(platform || '').trim().toLowerCase()] || '🎵';

  // Build the playlist cards — each playlist can list one or more listen links
  grid.innerHTML = SMILE_SESSIONS_PLAYLISTS.map((p) => {
    const links = (p.links || [])
      .map((link) => `
        <a href="${link.url}" target="_blank" rel="noopener" class="btn btn-light btn-sm">
          ${iconFor(link.platform)} ${link.platform} ↗
        </a>
      `)
      .join('');
    return `
    <div class="mood-card ${colorByMood[p.moodKey]}" data-tags="${p.moodKey}">
      <div class="mood-emoji">${p.moodEmoji}</div>
      <div class="mood-for">${p.tagline}</div>
      <h3>${p.title}</h3>
      <p class="mood-desc">${p.description}</p>
      <div class="mood-links">${links}</div>
    </div>
  `;
  }).join('');

  // Wire up filtering now that chips + cards exist
  if (filterBar) {
    const chips = filterBar.querySelectorAll('.chip');
    const cards = grid.querySelectorAll('.mood-card');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.dataset.filter;
        cards.forEach((card) => {
          const show = filter === 'all' || card.dataset.tags === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
}
