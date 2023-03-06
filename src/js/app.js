import { MagicLine } from './modules/magic-line.js';
import { Dropdown } from './modules/dropdown.js';
import { ColorTheme } from './modules/color-theme.js';
import * as Cookie from './modules/cookie.js';
import { Watch } from './modules/watcher.js';
import { Menu } from './modules/menu.js';
import { Input } from './modules/input.js';

//добавить темную тему если она выбрана в куки
if (Cookie.getCookie('theme-color') == 'dark') {
    $('body').addClass('body_dark');
}

//глобальные переменные
let watchObj = { width: window.innerWidth}

//выполнить код после полной загрузки
$(document).ready(function() {
    Cookie.alertCookie();
    Input()
    MagicLine(true);
    Dropdown(true);
    Watch(watchObj);
    Menu();
    ColorTheme();

    //активировать tooltip с атрибутом title
    $( '[title]' ).tooltip({
        show: { effect: "blind", duration: 1000 },
    });
})