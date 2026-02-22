document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".projectsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 0,
    loop: true,
    speed: 600,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
});
