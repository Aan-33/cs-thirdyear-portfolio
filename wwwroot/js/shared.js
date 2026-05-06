// ── Shared nav injection ──────────────────────────────
function renderNav(active) {
  const pages = [
    { href: '/',                   label: 'Home'    },
    { href: '/pages/wanted.html',  label: 'Wanted'  },
    { href: '/pages/contact.html', label: 'Contact' },
  ];
  document.getElementById('nav-placeholder').innerHTML = `
    <div class="banner">⚠ &nbsp; Do not attempt to apprehend — submit a secure tip instead &nbsp; ⚠</div>
    <nav>
      <div class="nav-inner">
        <a href="/" class="nav-brand">
          <div class="nav-icon">RFJ</div>
          <div class="nav-name">Reward for Justice</div>
        </a>
        <ul class="nav-links">
          ${pages.map(p => `<li><a href="${p.href}"${p.label === active ? ' class="active"' : ''}>${p.label}</a></li>`).join('')}
        </ul>
      </div>
    </nav>
  `;
}

// ── Shared footer injection ───────────────────────────
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="foot-inner">
        <p class="foot-legal">
          This is a fictional demonstration project. All persons, names, and cases are entirely invented
          and created for illustrative purposes only. Any resemblance to real persons is coincidental.
        </p>
        <div class="foot-grid">
          <div>
            <div class="foot-name">Reward for Justice</div>
            <div class="foot-desc">An international reward program dedicated to bringing the world's most dangerous fugitives to justice through public cooperation.</div>
          </div>
          <div>
            <div class="foot-col-t">Navigation</div>
            <ul class="foot-links">
              <li><a href="/">Home</a></li>
              <li><a href="/pages/wanted.html">Wanted List</a></li>
              <li><a href="/pages/contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div class="foot-col-t">Legal</div>
            <ul class="foot-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Whistleblower Protection</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© 2025 Reward for Justice Program. All rights reserved.</span>
          <span>CLASSIFICATION: UNCLASSIFIED // FOR PUBLIC RELEASE</span>
        </div>
      </div>
    </footer>
  `;
}

// ── Card builder ─────────────────────────────────────
function buildCard(p, clickable = false) {
  const click = clickable ? `onclick="openModal(${p.id})"` : '';
  return `
    <div class="card ${p.danger.toLowerCase()}" ${click}>
      <div class="card-top">
        <div class="card-avatar">${p.name.charAt(0)}</div>
        <div>
          <div class="card-tag">⬤ Wanted</div>
          <div class="card-name">${p.name}</div>
          <div class="card-alias">"${p.alias}"</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-crime">${p.crime}</div>
        <div class="card-desc">${p.description}</div>
        <div class="card-meta">
          <div><div class="meta-k">Nationality</div><div class="meta-v">${p.nationality}</div></div>
          <div><div class="meta-k">Last Seen</div><div class="meta-v">${p.lastSeen}</div></div>
        </div>
      </div>
      <div class="card-foot">
        <div>
          <div class="reward-lbl">Reward Offered</div>
          <div class="reward-amt">$${p.reward.toLocaleString()}</div>
        </div>
        <div class="badge ${p.danger.toLowerCase()}">${p.danger} Danger</div>
      </div>
    </div>`;
}

// ── Toast ─────────────────────────────────────────────
function showToast(title, body, isError = false) {
  const t = document.getElementById('toast');
  document.getElementById('toast-t').textContent = title;
  document.getElementById('toast-b').textContent = body;
  t.style.borderLeftColor = isError ? 'var(--red)' : 'var(--gold)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 5000);
}
