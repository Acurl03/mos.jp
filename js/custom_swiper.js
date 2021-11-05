// banner-view-swiper
const banner_view_swiper = new Swiper('.banner-view-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 6000,
  },
  spaceBetween: 20,

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// banner-info-swiper
const banner_info_swiper = new Swiper('.banner-info-swiper', {
  // 方向垂直
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
})

// attest-swiper 開js後，往前往後按鈕會不見，因為父層沒有position
const attest_swiper = new Swiper('.attest-swiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  breakpoints: {
    // 768以上
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 425以上
    425: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // 320以上
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
// news-swiper
const news_swiper = new Swiper('.news-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // 768以上
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    // 320以上
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// member-swiper
const member_swiper = new Swiper('.member-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,

  breakpoints: {
    // 768以上
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },

    // 425以上
    425: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // 320以上
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
