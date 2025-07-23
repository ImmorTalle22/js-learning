let burger = document.querySelector('.burger');
let burger_line = document.querySelectorAll('.burger__line');
let menu = document.querySelector('.header__nav');
let search = document.querySelector('.header__search-block');
let search_icon = document.querySelector('.header__search_icon');
let search_exit = document.querySelector('.header__search-exit');
let stepBtn = document.querySelectorAll('.step__button');
let stepItem = document.querySelectorAll('.how-work__right');



burger.addEventListener('click', function () {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('header__nav-active');
  document.body.classList.toggle('stop-scroll');
})

search_icon.addEventListener('click', function () {
  search.classList.add('header__search-block--active');
})

search_exit.addEventListener('click', function () {
  search.classList.remove('header__search-block--active');
})

window.addEventListener('click', function (e){
  if (e.target !== menu && e.target !== burger && e.target.classList.value !== 'burger__line'){
    burger.classList.remove('burger-active');
    menu.classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

stepBtn.forEach(function (element) {
  element.addEventListener('click', function (e){
    const path = e.currentTarget.dataset.path;


    stepBtn.forEach(function (btn){ btn.classList.remove('step__button-active')});
    e.currentTarget.classList.add('step__button-active');


    stepItem.forEach(function (element) {element.classList.remove('how-work__right-active')});
    document.querySelector(`[data-target=${path}]`).classList.add('how-work__right-active');
  });
});

  new Accordion('.accordion');







