import { MagicLine } from './modules/magic-line.js';
import { Dropdown } from './modules/dropdown.js';
import { ColorTheme } from './modules/color-theme.js';
import * as Cookie from './modules/cookie.js';

if (Cookie.getCookie('theme-color') == 'dark') {
    $('body').addClass('body_dark');
}



$(document).ready(function() {
    Cookie.alertCookie();
    MagicLine(true);
    Dropdown(true);

    ColorTheme();

    $( '[title]' ).tooltip({
        show: { effect: "blind", duration: 1000 },
    });
})