export function dropdown(isActive) {
    if (isActive) {
        $('.dropdown__trigger').hover(function () { // при наведении на элемент с классом .dropdown__trigger
            $('.dropdown', this).stop().slideDown(200); // показываем элемент с классом .dropdown-content
            $(this).addClass('hover');
        }, function () { // когда курсор уходит с элемента
            $('.dropdown', this).stop().slideUp(200); // скрываем элемент с классом .dropdown-content
            $(this).removeClass('hover');
        });
    }
    else {
        $('.dropdown__trigger').off()
    }
}