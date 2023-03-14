import { Dropdown } from './dropdown.js';

export function Watch(watchObj) {
    $(window).resize( function () {
        refresh()
    })

    $(document).ready( function () {
        refresh()
    })

    function refresh () {
        watchObj.width = window.innerWidth //текущая шырь экрана

        if (watchObj.width <= 992) {
            $('.dropdown__trigger--header').off()

            $('.dropdown__trigger--header').click( function () {

                $('.dropdown__trigger--header').removeClass('active').children('.dropdown').stop().slideUp(200)


                $(this).toggleClass('active')


                $('.dropdown', this).stop().slideToggle(200).css('display', 'flex')

            })

            $('.nav--header').on('click', function(event) {
                if($(event.target).is('.nav__item')) {
                  // Если клик был на дочернем элементе, ничего не делаем
                  return;
                }
                // Если клик был на родительском элементе, скрываем его
                $(this).removeClass('active');
            $('.body').removeClass('body--no-scroll')
            $('#burger').removeClass('active')
              });

              $('.nav__item').on('click', function(event) {
                event.stopPropagation(); // Предотвращаем распространение события на родительский элемент
              });

            // $('.nav--header').click( function () {
            //     $(this).removeClass('active')
            // })
        }
        // Dropdown(false)

    }
}