let finalPrice = 0
let previous = 0
const selects = ['#shampoo', '#engine-bay-detail', '#condition']
const dropdowns = ['#scratch-select', '#stain-select']

$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  initializeDrawerPress()
  initializeCalculatorPress()
  initializeDetailListeners()
  initializePriceListeners()
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
    $('#final-price').text(finalPrice)
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

function initializeDetailListeners() {
  $('#scratch-removal').change( () => { $('#scratch-removal').prop('checked') ? $('#scratch-detail').show() : $('#scratch-detail').hide() })
  $('#stain-removal').change( () => { $('#stain-removal').prop('checked') ? $('#stain-detail').show() : $('#stain-detail').hide() })
}

function initializePriceListeners() {
  $('#basic-select').click( () => { finalPrice += 100; })
  $('#premium-select').click( () => { finalPrice += 130 })
  $('#deluxe-select').click( () => { finalPrice += 190 })

  selects.forEach( value => {
    checkSelectListeners(value)
  })

  dropdowns.forEach( value => {
    checkDropdownListeners(value)
  })
}

function checkSelectListeners(elemId) {
  $(elemId).change( () => {
    $(elemId).prop('checked') ? finalPrice += parseInt($(elemId).val()) : finalPrice -= parseInt($(elemId).val())
  })
}

function checkDropdownListeners(elemId) {
  $(elemId).on('focus', function () {
    previous = parseInt(this.value)
  }).change( function() {
    finalPrice -= previous
    finalPrice += parseInt(this.value)
    previous = parseInt(this.value)

    console.log(finalPrice)
  })
}
