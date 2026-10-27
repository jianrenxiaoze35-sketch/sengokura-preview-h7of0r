/* 下層ページ共通：メニューの開閉と年齢確認 */
(function () {
  var header = document.querySelector('.sub-header');
  var burger = document.getElementById('sub-burger');
  if (header && burger) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    });
  }

  var gate = document.getElementById('age-gate');
  if (!gate || document.documentElement.classList.contains('age-ok')) return;
  document.documentElement.style.overflow = 'hidden';
  document.getElementById('age-yes').focus();
  document.getElementById('age-yes').addEventListener('click', function () {
    try { sessionStorage.setItem('ageVerified', '1'); } catch (e) {}
    document.documentElement.classList.add('age-ok');
    document.documentElement.style.overflow = '';
  });
  document.getElementById('age-no').addEventListener('click', function () {
    window.location.href = 'https://www.kunimare.co.jp/';
  });
})();
