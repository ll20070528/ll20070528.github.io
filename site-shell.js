/**
 * Shared site shell renderer for static pages.
 * Injects the navigation, footer, skip link, and back-to-top button.
 */

(function() {
  const NAV_ITEMS = [
    { key: 'home', href: 'index.html', label: '主页' },
    { key: 'projects', href: 'projects.html', label: '项目' },
    { key: 'publications', href: 'publications.html', label: '论文' },
    { key: 'achievements', href: 'achievements.html', label: '成就' },
    { key: 'team', href: 'team.html', label: '团队' }
  ];

  const FOOTER_SOCIALS = [
    {
      href: 'https://github.com/higherlin',
      label: 'GitHub',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
    },
    {
      href: 'mailto:linqinghai@sdjtu.edu.cn',
      label: 'Email',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
    }
  ];

  function whenReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
      return;
    }
    fn();
  }

  function getPathSegments() {
    const { pathname } = window.location;
    return pathname.split('/').filter(Boolean);
  }

  // Known site-internal subdirectories (relative to the project root).
  // Pages that live inside one of these are walked back up to the project
  // root when computing nav links.
  const KNOWN_SUBDIRS = new Set(['papers']);

  function getProjectBase() {
    // Returns the absolute URL path of the project root, with trailing slash.
    const path = window.location.pathname;
    const dir = path.substring(0, path.lastIndexOf('/') + 1) || '/';
    const segments = dir.split('/').filter(Boolean);
    while (segments.length > 0 && KNOWN_SUBDIRS.has(segments[segments.length - 1])) {
      segments.pop();
    }
    return '/' + (segments.length ? segments.join('/') + '/' : '');
  }

  function toRootHref(href) {
    return getProjectBase() + href;
  }

  function getCurrentPage() {
    const segments = getPathSegments();
    if (segments.includes('papers')) {
      return 'publications';
    }

    const fileName = segments.length === 0 || window.location.pathname.endsWith('/')
      ? 'index.html'
      : segments[segments.length - 1].split('?')[0];

    const pageMap = {
      'index.html': 'home',
      'publications.html': 'publications',
      'projects.html': 'projects',
      'achievements.html': 'achievements',
      'team.html': 'team'
    };

    return pageMap[fileName] || '';
  }

  function getFooterCopy() {
    const bodyCopy = document.body.dataset.footerCopy;
    if (bodyCopy) {
      return bodyCopy;
    }
    return '© 2026 蔺庆海 · Qinghai Lin';
  }

  function getFooterClassName() {
    const footerSize = document.body.dataset.footerWidth;
    if (footerSize === 'wide') {
      return 'page-shell-footer page-shell-footer-wide';
    }
    return 'page-shell-footer';
  }

  function buildNav() {
    const currentPage = getCurrentPage();
    const hasMainContent = Boolean(document.getElementById('main-content'));
    const navLinks = NAV_ITEMS.map((item) => {
      const ariaCurrent = item.key === currentPage ? ' aria-current="page"' : '';
      return `<a href="${toRootHref(item.href)}" class="nav-button"${ariaCurrent}>${item.label}</a>`;
    }).join('');

    return `${hasMainContent ? '<a href="#main-content" class="skip-link">跳到主要内容</a>' : ''}
  <nav class="nav-buttons" role="navigation" aria-label="主导航">
    ${navLinks}
    <button id="theme-toggle" class="theme-toggle" aria-label="切换深色模式" title="切换深色/浅色模式"></button>
  </nav>`;
  }

  function buildFooter() {
    const socialLinks = FOOTER_SOCIALS.map((item) => `
        <a href="${item.href}" aria-label="${item.label}" target="_blank" rel="noopener">
          ${item.icon}
        </a>`).join('');

    return `
  <div class="${getFooterClassName()}">
    <footer class="site-footer">
      <div class="footer-social">${socialLinks}
      </div>
      <p class="footer-copyright">${getFooterCopy()}<span class="footer-credit">模板：<a href="https://github.com/arvid-pku/Academic-Homepage-Template" target="_blank" rel="noopener">arvid-pku/Academic-Homepage-Template</a></span></p>
    </footer>
  </div>
  <button id="back-to-top" class="back-to-top" aria-label="返回顶部">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </button>`;
  }

  function injectSiteShell() {
    const navMount = document.getElementById('site-nav');
    if (navMount) {
      navMount.innerHTML = buildNav();
    }

    const footerMount = document.getElementById('site-footer');
    if (footerMount) {
      footerMount.innerHTML = buildFooter();
    }
  }

  whenReady(injectSiteShell);
})();
