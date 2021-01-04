$(document).ready(function () {
  // $(".about__gallery").slick({
  //   // autoplay:true,
  //   // autoplaySpeed: 5000,
  //   // setting-name: setting-value
  //   // slidesToShow: 2,
  //   responsive: [
  //     {
  //       breakpoint: 2000,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1560,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 501,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //   ],
  // });

  new Splide(".splide", {
    // focus: 2,
    type: "loop",
    perPage: 3,
    gap: 0,
    padding: 0,
    autoWidth: true,
    pagination: false,
    arrowPath: "0",
    // arrows: false,
    // width: "50%",
  }).mount();
});
