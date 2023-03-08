export function Input() {
    const inputFocus = $('.input__field-focus')

    inputFocus.each(function() {
      if($(this).val() !== '') {
        let currentLabel = $(this).siblings('.input__label'),
            currentValue = currentLabel.css('transition')

        currentLabel.css('transition','none').addClass('active')

        setTimeout(function() {
            currentLabel.css('transition',currentValue)
        }, 1)
      }
    })

    inputFocus.focusin( function() {
        $(this).siblings('.input__label').addClass('active')
    })
    inputFocus.focusout( function() {
        if (!$(this).val().length) {
            $(this).siblings('.input__label').removeClass('active')
        }
    })
}