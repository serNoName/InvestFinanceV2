export function Menu() {
    $('#burger').click(function () {
        $(this).addClass('active')
        $('.nav').addClass('active')
        $('.overlay').stop().fadeIn('fast').addClass('active')
    })

    $('.overlay').click(function () {
        $(this).stop().fadeOut('fast')
        $('#burger').removeClass('active')
        $('.nav').removeClass('active')
    })
    // Скрипт, который скрывает и показывает хэдер при скролле вверх и вниз
    let prevScrollpos = window.pageYOffset;
    $(window).scroll(function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $(".header").removeClass('hidden');
        } else {
            $(".header").addClass('hidden');
        }
        prevScrollpos = currentScrollPos;
    });
}