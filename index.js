$(document).ready(() => {
    $('#premium-select').on('click', (e) => {
        $('#premium-card').addClass('selected')
        console.log(48 + $('#basic-card').css('width'))

        $('#basic-card').css({position: 'relative', 'z-index': -1})
        $('#basic-card').animate({
            right: -$('#basic-card').css('width') - 48
        }, 500, () => {
            $('#basic-card').css({opacity: 0})
        })

        $('#deluxe-card').css({
            position: 'relative',
            left: `calc(-${$('#basic-card').css('width')} - 3rem)`,
            'z-index': -1
        })
    })
})