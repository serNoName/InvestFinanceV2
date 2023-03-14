export function GoToTop() {
    scroll()
    $(window).scroll(scroll());

    // Прокрутить страницу вверх, когда пользователь нажимает на кнопку
    $('.btn-go-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);

        return;
    });

    function scroll() {
        if ($(this).scrollTop() > 100) {
            $('.btn-go-to-top').fadeIn(300, function(){
                $(this).removeClass('hide');
            })
        } else {
            $('.btn-go-to-top').fadeOut(300, function(){
                $(this).addClass('hide');
            })
        }
    }
}