let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


var swiper = new Swiper(".swiper-portfolio", {
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

function openSwiperElhovka() {
    let afonino = document.getElementById('afonino'); // получаем элемент по ID
    let burevestnik = document.getElementById('burevestnik'); // получаем элемент по ID
    let elhovka = document.getElementById('elhovka'); // получаем элемент по ID

    let styleAfonino = getComputedStyle(afonino); // получаем его стили
    let styleBurevestnik = getComputedStyle(burevestnik); // получаем его стили
    let styleElhovka = getComputedStyle(elhovka); // получаем его стили

    if (styleAfonino.display !== 'none'){
        document.getElementById('afonino').style.display='none';
    }
    if (styleBurevestnik.display !== 'none'){
        document.getElementById('burevestnik').style.display='none';
        
    }
    if (styleElhovka.display === 'none') {
        document.getElementById('elhovka').style.display='block';
        
    } else if (styleElhovka.display !== 'none') {
        document.getElementById('elhovka').style.display='none';
    }
}


function openSwiperBurevestnik() {
    let afonino = document.getElementById('afonino'); // получаем элемент по ID
    let burevestnik = document.getElementById('burevestnik'); // получаем элемент по ID
    let elhovka = document.getElementById('elhovka'); // получаем элемент по ID

    let styleAfonino = getComputedStyle(afonino); // получаем его стили
    let styleBurevestnik = getComputedStyle(burevestnik); // получаем его стили
    let styleElhovka = getComputedStyle(elhovka); // получаем его стили

    if (styleAfonino.display !== 'none'){
        document.getElementById('afonino').style.display='none';
    }

    if (styleElhovka.display !== 'none'){
        document.getElementById('elhovka').style.display='none';
    }

    if (styleBurevestnik.display === 'none') {
        document.getElementById('burevestnik').style.display='block';
    } else if (styleBurevestnik.display !== 'none') {
        document.getElementById('burevestnik').style.display='none';
    }
}

function openSwiperAfonino() {
    let afonino = document.getElementById('afonino'); // получаем элемент по ID
    let burevestnik = document.getElementById('burevestnik'); // получаем элемент по ID
    let elhovka = document.getElementById('elhovka'); // получаем элемент по ID

    let styleAfonino = getComputedStyle(afonino); // получаем его стили
    let styleBurevestnik = getComputedStyle(burevestnik); // получаем его стили
    let styleElhovka = getComputedStyle(elhovka); // получаем его стили
    if (styleBurevestnik.display !== 'none'){
        document.getElementById('burevestnik').style.display='none';
    }
    if (styleElhovka.display !== 'none'){
        document.getElementById('elhovka').style.display='none';
    }
    if (styleAfonino.display === 'none') {
        document.getElementById('afonino').style.display='block';
    } else if (styleAfonino.display !== 'none') {
        document.getElementById('afonino').style.display='none';
    }
}


function openSwiperNicePlace() {
    let project_nice_place = document.getElementById('nicePlace'); // получаем элемент по ID

    let style_nice_place = getComputedStyle(project_nice_place); // получаем его стили

    if (style_nice_place.display === 'none') {
        document.getElementById('nicePlace').style.display='block';
    } else if (project_nice_place.display !== 'none') {
        document.getElementById('nicePlace').style.display='none';
    }
}