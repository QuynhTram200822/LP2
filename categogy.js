$(document).ready(function () {
  $(".swiper-2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
    dots: true,

          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
});