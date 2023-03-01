export function Dropdown(isActive) {
    if (isActive) {
        $('.dropdown__trigger').hover(function () { // при наведении на элемент с классом .dropdown__trigger
            $('.dropdown', this).stop().slideDown(200).css('display', 'flex'); // показываем элемент с классом .dropdown-content
            $(this).addClass('hover').css('height', 'fit-content');
        }, function () { // когда курсор уходит с элемента
            $('.dropdown', this).stop().slideUp(200); // скрываем элемент с классом .dropdown-content
            $(this).removeClass('hover');
        });
    }
    else {
        $('.dropdown__trigger').off()
    }
}