$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  initializeDrawerPress()
  initializeCalculatorPress()
})

function initializeDrawerPress() {
  $('#basic-select, #premium-select, #deluxe-select').click( () => {
    $('#additional-services').show(1000)
    $('#step-1').hide(1000)
  })

  $(document).on('click', '#back-button', () => {
    $('#step-1').show(1000)
    $('#additional-services').hide(1000)
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
