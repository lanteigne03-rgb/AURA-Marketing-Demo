(function() {
  if (window._navInit) return;
  window._navInit = true;

  function init() {
    var btn   = document.getElementById('btn-hamburger');
    var links = document.getElementById('nav-links');
    var ddBtn = document.querySelector('.nav-dropdown-trigger');
    var ddEl  = document.getElementById('nav-dropdown');

    if (btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        links.classList.toggle('open');
        btn.classList.toggle('open');
      });
    }

    if (ddBtn) {
      ddBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var open = ddEl.classList.toggle('open');
        ddBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    document.addEventListener('click', function(e) {
      var nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target)) {
        if (links) { links.classList.remove('open'); if (btn) btn.classList.remove('open'); }
        if (ddEl)  { ddEl.classList.remove('open');  if (ddBtn) ddBtn.setAttribute('aria-expanded', 'false'); }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
