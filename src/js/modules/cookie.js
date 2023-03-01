export function cookie() {
    if (document.cookie.indexOf('cookies_accepted=true') === -1) {
        $('.notification_cookie').fadeIn(300);
    }

    // Обработчик события для кнопки принятия куки
    $('.notification-close').on('click', function () {
        // Устанавливаем куки с помощью объекта Date
        let now = new Date();
        let expires = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
        document.cookie = 'cookies_accepted=true;expires=' + expires.toUTCString() + ';path=/';
        // Скрываем уведомление
        $('.notification_cookie').fadeOut(300);
    });
}