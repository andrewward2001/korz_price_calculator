$(document).ready(() => {
    $('#premium-select').on('click', (e) => {
        $('#premium-card').addClass('selected')

        $('#basic-card').css({position: 'relative', 'z-index': -1})
        $('#basic-card').animate({
            left: parseInt($('#basic-card').css('width')) + 48,
            opacity: 0
        }, 500)


        $('#deluxe-card').css({position: 'relative', 'z-index': -1})
        $('#deluxe-card').animate({
            right: parseInt($('#deluxe-card').css('width')) + 48,
            opacity: 0
        }, 500)
    })

    $('#basic-select').on('click', (e) => {
        $('#basic-card').addClass('selected')

        $('#basic-card').animate({
            left: parseInt($('#basic-card').css('width')) + 48
        }, 500)

        $('#premium-card').css({'z-index': -1})
        $('#premium-card').animate({
            opacity: 0
        }, 500)

        $('#deluxe-card').css({position: 'relative', 'z-index': -1})
        $('#deluxe-card').animate({
            right: parseInt($('#deluxe-card').css('width')) + 48
        }, 500, () => {
            $('#deluxe-card').css({opacity: 0})
        })
    })

    $('#deluxe-select').on('click', (e) => {
        $('#deluxe-card').addClass('selected')

        $('#basic-card').css({position: 'relative', 'z-index': -1})
        $('#basic-card').animate({
            left: parseInt($('#basic-card').css('width')) + 48,
            opacity: 0
        }, 500)

        $('#premium-card').css({'z-index': -1})
        $('#premium-card').animate({
            opacity: 0
        }, 500)

        $('#deluxe-card').animate({
            right: parseInt($('#deluxe-card').css('width')) + 48
        }, 500)
    })
})
