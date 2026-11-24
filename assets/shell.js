// Habillage commun : icônes, menu latéral, barre d'onglets du téléphone, fil d'Ariane.
(function () {
  document.querySelectorAll('i[data-i]').forEach(function (i) {
    var cls = i.getAttribute('class');
    var s = window.ico(i.getAttribute('data-i'));
    if (cls) s = s.replace('class="i', 'class="i ' + cls);
    i.outerHTML = s;
  });
  var NOMS = { conversations: 'Conversations', automatique: 'Envoi automatique', campagne: 'Campagne' };
  function maj() {
    var h = location.hash.slice(1);
    if (!NOMS[h]) h = 'conversations';
    document.querySelectorAll('[data-m]').forEach(function (a) {
      if (a.closest('#tabs')) return;
      a.classList.toggle('on', a.getAttribute('data-m') === h);
    });
    document.getElementById('crumb-v').textContent = NOMS[h];
  }
  window.addEventListener('hashchange', maj);
  maj();
})();
