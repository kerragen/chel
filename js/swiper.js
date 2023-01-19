var swiperMedia = window.matchMedia("(max-width: 767px)");

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

