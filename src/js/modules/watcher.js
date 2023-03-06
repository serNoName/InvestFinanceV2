export function Watch(watchObj) {
    $(window).resize( function () {
        watchObj.width = window.innerWidth //текущая шырь экрана
    })
}