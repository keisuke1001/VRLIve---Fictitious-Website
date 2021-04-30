// Hamburger Menu
const HamBtn = document.getElementById('hamBtn'); // id hamBtnを所得
const gNav = document.getElementById('gNav'); // idgNavを所得
// HamBtnがクリックサれたら
HamBtn.addEventListener('click', () => {
  HamBtn.classList.toggle('open_Nav'); // open_Navをtoggle
  gNav.classList.toggle('show_Nav'); // show_Navをtoggle
});


// スクロールイベント
window.addEventListener('scroll', () => {
  let top = document.getElementById('header');
  var window_h = window.innerHeight;
  if (window_h < window.scrollY) {
    top.classList.add('view');
  } else {
    top.classList.remove('view');
  }
});
