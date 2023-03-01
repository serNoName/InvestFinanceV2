import * as flsFunctions from './modules/functios.js';
import { magicLine } from './modules/magic-line.js';
import { dropdown } from './modules/dropdown.js';
import { cookies } from './modules/cookie.js';

magicLine(true);
dropdown(true);
cookies;

// magicLine(false);

$(document).ready(function() {
    $( '[title]' ).tooltip({
        show: { effect: "blind", duration: 1000 },
    });

    $('.triger-theme').on('click', function() {
        $('.body').toggleClass('body_dark')
    });
})