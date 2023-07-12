// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

export const slider = new Swiper('.trainer__slider', {
  loop: true,
  navigation: {
    nextEl: '.trainer__btn--next',
    prevEl: '.trainer__btn--prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
