//import * as flsFunctions from "./modules/functions.js";
//flsFunctions.thisTest();

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage =
        'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

//burger
const iconMenu = document.querySelector('.header__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.header__nav');
  const menuPage = document.querySelector('.page');
  iconMenu.addEventListener('click', function (e) {
    menuPage.classList.toggle('_lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
