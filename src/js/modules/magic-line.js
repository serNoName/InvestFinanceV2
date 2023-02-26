export function magicLine(isActive) {
    let isNotHomePage = $('.nav__item.active').length,
        currentLeftPos, currentWidth,
        timeout;


    // Находим элемент с классом "magic-line" и сохраняем его в переменную
    const magicLineElm = $(".magic-line"),
        navItem = $('.nav__item')

    if (isActive) {
        // Объявление переменных
        let leftPos, newWidth;

        if (isNotHomePage) {

            // Находим ширину и позицию текущего активного элемента навигации
            newWidth = $('.nav__item.active').width()
            leftPos = $('.nav__item.active').position().left

            // Сохраняем значения ширины и позиции текущего активного элемента для последующего использования
            currentWidth = newWidth
            currentLeftPos = leftPos

            // Показываем элемент с классом "magic-line"

            // Устанавливаем ширину и позицию элемента "magic-line" равными ширине и позиции текущего активного элемента
            magicLineElm.width(`${newWidth}px`).css('left', `${leftPos}px`)
        }

        // Добавляем обработчик события "mouseover" для элементов навигации
        navItem.on('mouseover', function () {
            clearTimeout(timeout)
            magicLineElm.removeClass('hidden')

            // Находим ширину и позицию элемента, на который наведен курсор мыши
            newWidth = $(this).width()
            leftPos = $(this).position().left

            // Устанавливаем ширину и позицию элемента "magic-line" равными ширине и позиции элемента, на который наведен курсор мыши
            magicLineElm.width(`${newWidth}px`).css('left', `${leftPos}px`)
        })

        // Добавляем обработчик события "mouseout" для элементов навигации
        navItem.on('mouseout', function () {
            // Возвращаем ширину и позицию элемента "magic-line" к значениям текущего активного элемента
            timeout =  setTimeout( function() {
                magicLineElm.addClass('hidden');
            }, 1000)
        });
    } else {
        // Удаляем элемент с классом "magic-line"
        magicLineElm.remove()
    }

}