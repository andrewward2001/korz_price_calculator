$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip()
  initializePlanAnimation()
  initializeDrawerPress()
  initializeCalculatorPress()
})

function initializePlanAnimation() {
  $('#premium-select').on('click', (e) => {
    $('#premium-card').addClass('selected')

    $('#basic-card').css({position: 'relative', 'z-index': -1})
    $('#basic-card').animate({
      // left: parseInt($('#basic-card').css('width')) + 48,
      opacity: 0
    }, 500, () => {
      $('#basic-card').remove()
    })

    $('#deluxe-card').css({position: 'relative', 'z-index': -1})
    $('#deluxe-card').animate({
      // right: parseInt($('#deluxe-card').css('width')) + 48,
      opacity: 0
    }, 500, () => {
      $('#deluxe-card').remove()
    })
  })

  $('#basic-select').on('click', (e) => {
    $('#basic-card').addClass('selected')

    $('#premium-card').css({'z-index': -1})
    $('#premium-card').animate({
      opacity: 0
    }, 500, () => {
      $('#premium-card').remove()
    })

    $('#deluxe-card').css({position: 'relative', 'z-index': -1})
    $('#deluxe-card').animate({
      opacity: 0
    }, 500, () => {
      $('#deluxe-card').remove()
    })
  })

  $('#deluxe-select').on('click', (e) => {
    $('#deluxe-card').addClass('selected')

    $('#basic-card').css({position: 'relative', 'z-index': -1})
    $('#basic-card').animate({
      // left: parseInt($('#basic-card').css('width')) + 48,
      opacity: 0
    }, 500)

    $('#premium-card').css({'z-index': -1})
    $('#premium-card').animate({
      opacity: 0
    }, 500)

    $('#deluxe-card').animate({
      // right: parseInt($('#deluxe-card').css('width')) + 48
    }, 500)
  })
}

function initializeDrawerPress() {
  $('#basic-select').click( () => {
    $('#additional-services').show(1000)
  })
}

function initializeCalculatorPress() {
  $('#calculator').click( () => {
    $('#final-price-container').show(1500)
    $('html, body').animate({
      scrollTop: $("#final-price-container").offset().top
    }, 1500)
    countUp()
  })
}

function countUp() {
  $('#final-price').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    })
  })
}
