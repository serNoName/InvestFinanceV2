export function alertCookie() {
    if (!getCookie('cookies_accepted')) {
        $('.notification_cookie').fadeIn()
        // Обработчик события для кнопки принятия куки
        $('.notification-close').on('click', function () {
            // Устанавливаем куки с помощью функции createCookie
            createCookie('cookies_accepted', 'true')
            // Скрываем уведомление
            $('.notification').fadeOut(300);
        });
    }
}
export function getCookie(name) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export function createCookie(name ,value) {
    const now = new Date();
    const expires = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

    document.cookie = `${name}=${value}; SameSite=None; Secure; expires=${expires.toUTCString()}; path=/`;
}

if (getCookie('first-conect') === null) {
    createCookie('first-conect', 'true')
} else {
    createCookie('first-conect', 'false')
}