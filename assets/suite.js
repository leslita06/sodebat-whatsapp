/* Espaces SODEBAT : navigation commune entre toutes les applications (maquette). */
(function () {
  var B = 'https://leslita06.github.io/';
  var APPS = [
    ['Direction', 'sodebat-tableau-de-bord/', 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z'],
    ['Commercial', 'sodebat-tableau-commercial/', 'M3 17l6-6 4 4 8-8M14 7h7v7'],
    ['Finance', 'sodebat-tableau-finance/', 'M3 7h18v12H3zM3 11h18M16 15h2'],
    ['Opérations', 'sodebat-operations/', 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z'],
    ['SAV 24/7', 'sodebat-sav/', 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z'],
    ['SAV WhatsApp', 'sodebat-whatsapp/', 'M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 21l2.2-5.3A8.4 8.4 0 1 1 21 11.5z'],
    ['Réseaux sociaux', 'sodebat-reseaux/', 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4'],
    ['Nouveaux espaces', 'sodebat-maquettes/', 'M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z'],
    ['Estimation et cabine 3D', 'sodebat-configurateur/', 'M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7L12 12l8.7-5M12 22V12']
  ];
  var here = location.pathname.split('/').filter(Boolean)[0] + '/';
  function svg(d) { return '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex:none;opacity:.75"><path d="' + d + '"/></svg>'; }
  var css = document.createElement('style');
  css.textContent = '.sx-sec{margin-top:18px;padding-top:14px;border-top:1px solid rgba(15,23,42,.08)}' +
    '.sx-a{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;font:500 13px/1.2 Inter,system-ui,sans-serif;color:#475569;text-decoration:none;transition:background .12s,color .12s}' +
    '.sx-a:hover{background:rgba(0,74,173,.06);color:#0f172a}.sx-a.on{color:#004AAD;background:rgba(0,74,173,.08)}' +
    '.sx-a .ex{margin-left:auto;opacity:0;transition:opacity .12s}.sx-a:hover .ex{opacity:.5}' +
    '.sx-fab{position:fixed;left:16px;bottom:16px;z-index:9999;font:600 13px/1 Inter,system-ui,sans-serif}' +
    '.sx-fab>button{display:flex;align-items:center;gap:8px;background:#0B1B33;color:#fff;border:0;border-radius:999px;padding:11px 16px;box-shadow:0 8px 24px rgba(11,27,51,.25);cursor:pointer}' +
    '.sx-pan{position:absolute;left:0;bottom:52px;width:240px;background:#fff;border-radius:14px;padding:8px;box-shadow:0 18px 48px rgba(11,27,51,.22);display:none}' +
    '.sx-fab.open .sx-pan{display:block}.sx-pan p{margin:6px 10px 8px;font:600 11px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8}';
  document.head.appendChild(css);
  function links() {
    return APPS.map(function (a) {
      var on = a[1] === here;
      return '<a class="sx-a' + (on ? ' on' : '') + '" href="' + B + a[1] + '"' + (on ? ' aria-current="page"' : '') + '>' + svg(a[2]) + '<span>' + a[0] + '</span><span class="ex">›</span></a>';
    }).join('');
  }
  var nav = document.querySelector('aside.side .nav');
  if (nav) {
    var s = document.createElement('div'); s.className = 'sx-sec';
    s.innerHTML = '<p class="nl">Espaces SODEBAT</p>' + links();
    nav.appendChild(s);
  } else {
    var f = document.createElement('div'); f.className = 'sx-fab';
    f.innerHTML = '<div class="sx-pan"><p>Espaces SODEBAT</p>' + links() + '</div><button type="button" aria-expanded="false">' + svg(APPS[0][2]) + 'Espaces SODEBAT</button>';
    document.body.appendChild(f);
    var b = f.querySelector('button');
    b.addEventListener('click', function () { var o = f.classList.toggle('open'); b.setAttribute('aria-expanded', o); });
    document.addEventListener('click', function (e) { if (!f.contains(e.target)) f.classList.remove('open'); });
  }
})();
