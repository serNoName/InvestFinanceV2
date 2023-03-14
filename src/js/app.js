import { MagicLine } from './modules/magic-line.js';
import { Dropdown } from './modules/dropdown.js';
import * as Cookie from './modules/cookie.js';
import { Watch } from './modules/watcher.js';
import { Menu } from './modules/menu.js';
import { Input } from './modules/input.js';
import { GoToTop } from './modules/go-to-top.js';

// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'


//глобальные переменные
let watchObj = { width: window.innerWidth }

//выполнить код после полной загрузки
$(document).ready(function () {
    Cookie.alertCookie();
    Input()
    MagicLine(true);
    Dropdown(true);
    Watch(watchObj);
    Menu();
    GoToTop();



    //активировать tooltip с атрибутом title
    $('[title]').tooltip({
        show: { effect: "blind", duration: 1000 },
    });
})




let swiper = new Swiper(".best__swiper", {
    centeredSlides: true,
    preloadFonts: false,
    slidesPerView: 1,
    lazy: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
