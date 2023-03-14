export function Menu() {
    $('#burger').click(function () {
        $(this).toggleClass('active')
        $('#nav').toggleClass('active')
        $('.body').toggleClass('body_no-scroll')
        $('.dropdown_nav').slideUp(200).parent().removeClass('active')
        // $('.overlay').stop().fadeIn('fast').addClass('active')
    })

    $('.overlay').click(function () {
        $(this).stop().fadeOut('fast')
        $('#burger').removeClass('active')
        $('#nav').removeClass('active')
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