export function Input() {
    const inputFocus = $('.input__field-focus')

    inputFocus.focusin( function() {
        $(this).siblings('.input__label').addClass('active')
    })
    inputFocus.focusout( function() {
        if (!$(this).val().length) {
            $(this).siblings('.input__label').removeClass('active')
        }
    })
}