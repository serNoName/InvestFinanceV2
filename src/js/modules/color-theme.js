import { createCookie, getCookie } from './cookie.js';

export function ColorTheme() {

    if (getCookie('first-conect') == 'true') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            createCookie('theme-color', 'dark');
        } else {
            createCookie('theme-color', 'light');
        }
    }

    let themeIsDark = getCookie('theme-color') == 'dark';

    if (themeIsDark) {
        $('.body').addClass('body_dark');
    } else {
        $('.body').removeClass('body_dark');
    }

    // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        //     if (e.matches) {
            //         console.log('Темная тема оформления включена');
            //     } else {
                //         console.log('Светлая тема оформления включена');
                //     }
                // });

    $('.trigger-theme').on('click', function () {

        themeIsDark = getCookie('theme-color') == 'dark';

        if (themeIsDark) {
            $('.body').removeClass('body_dark')

            createCookie('theme-color', 'light')
        } else {
            $('.body').addClass('body_dark')

            createCookie('theme-color', 'dark')
        }
    });
}