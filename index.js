$(document).ready(() => {
    $('#premium-select').on('click', (e) => {
        $('#premium-card').addClass('selected')
        console.log(parseInt($('#basic-card').css('width')) + 48)

        $('#basic-card').css({position: 'relative', 'z-index': -1})
        $('#basic-card').animate({
            left: parseInt($('#basic-card').css('width')) + 48
        }, 500, () => {
            $('#basic-card').css({opacity: 0})
        })


        $('#deluxe-card').css({position: 'relative', 'z-index': -1})
        $('#deluxe-card').animate({
            right: parseInt($('#deluxe-card').css('width')) + 48
        }, 500, () => {
            $('#deluxe-card').css({opacity: 0})
        })
    })
})