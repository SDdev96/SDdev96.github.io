document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  new Swiper(".projectsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 0,
    loop: true,
    speed: prefersReducedMotion ? 0 : 600,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    // Auto-advancing carousels are hostile to users who need more reading time,
    // so the rotation is disabled when the OS asks for reduced motion.
    //
    // `disableOnInteraction: true` is the important one: the moment the visitor
    // swipes or taps, the carousel becomes theirs and stops moving on its own.
    // With `false`, the timer stole the card back 4s later — and since touch
    // devices have no hover, `pauseOnMouseEnter` gave mobile users no way out.
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: 6500,
          disableOnInteraction: true,
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
