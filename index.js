$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip()
  initializeDrawerPress()
  initializeCalculatorPress()
})

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
