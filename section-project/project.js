// document.addEventListener("DOMContentLoaded", function () {
var glide = new Glide(".glide", {
  startAt: 0,
  type: "carousel",
  perView: 1,
  peek: {
    before: 150,
    after: 150,
  },
  focusAt: "center",
  gap: 0,
  // autoplay: true,
  hoverpause: true,
  swipeThreshold: 80,
  animationTimingFunc: "ease-in-out",
  animationDuration: 300,
  breakpoints: {
    768: {
      perView: 1,
      peek: {
        before: 75,
        after: 75,
      },
    },
    576: {
      perView: 1,
      peek: {
        before: 75,
        after: 75,
      },
    },
    425: {
      perView: 1,
      peek: {
        before: 50,
        after: 50,
      },
    },
  },
});

glide.mount();

// });
