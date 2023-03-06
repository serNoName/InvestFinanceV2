export function Dropdown(isActive) {
    if (isActive) {
        let timeout, currentDropdown, $this
        $('.dropdown__trigger').hover(function () { // при наведении на элемент с классом .dropdown__trigger
            $this = $(this)

            currentDropdown = $('.dropdown', this)
            $('.dropdown__trigger').removeClass('active').children('.dropdown').stop().slideUp(200)
            currentDropdown.stop().slideDown(200).css('display', 'flex'); // показываем элемент с классом .dropdown-content
            $(this).addClass('hover').addClass('active')
            clearTimeout(timeout)
        }, function () { // когда курсор уходит с элемента
            currentDropdown = $('.dropdown', this)
            $this = $(this)
            $this.removeClass('hover');
            timeout = setTimeout(function () {
                console.log();
                $this.removeClass('active');
                currentDropdown.stop().slideUp(200);// скрываем .dropdown с классом
            }, 400)
        });
    }
    else {
        $('.dropdown__trigger').off()
    }
}