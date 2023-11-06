var swiper = new Swiper(".swiper-certificate", {
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },

    mousewheel: true,
    keyboard: true,

    effect: "coverflow",

    slidesPerView:2,

    coverflowEffect: {
        rotate: 20,
        slideShadows: false,
        shadow: true,
        stretch:-50,
    },

    autoplay: {
        delay: 5000,
    },
    speed:700,
});