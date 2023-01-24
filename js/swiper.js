const swiperMedia = window.matchMedia("(max-width: 768px)");

function swiperInit(swiperMedia) {
  if (swiperMedia.matches) { 
    const brandsSwiper = new Swiper('.swiper-main', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    }); 
  } 
}

swiperInit(swiperMedia);

const brands = document.querySelector('.swiper-wrapper');
const openButton = document.querySelector('.swiper-button');

openButton.addEventListener('click', function() {
  brands.classList.toggle('swiper-main__wrapper--hidden');
  openButton.textContent = 'Скрыть';
  openButton.classList.toggle('swiper-button--open');
  if (brands.classList.contains('swiper-main__wrapper--hidden')) {
    openButton.textContent = 'Показать все';
  }
});