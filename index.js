$(document).ready(() => {
    let addServices = `
    <div class="form-group d-none add-svcs" style="opacity: 0">
        <label for="additional" class="col-form-label">
          <h4 class="font-weight-normal my-0"> Additional Services </h4>
          <small class="text-muted"> Hover for Details </small>
        </label>
        <div class="checkbox-container bg-light pt-3 pl-3 pb-2 text-left">
          <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" value="" id="scratchRemoval">
              <label class="custom-control-label ml-2" for="scratchRemoval"> Compound/Scratch Removal </label>
          </div>
          <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" value="" id="shampoo">
              <label class="custom-control-label ml-2" for="shampoo"> Carpet/Seat Shampooing </label>
          </div>
          <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" value="" id="stainRemoval">
              <label class="custom-control-label ml-2" for="stainRemoval"> Stain Removal </label>
          </div>
          <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" value="" id="engineBayDetail">
              <label class="custom-control-label ml-2" for="engineBayDetail"> Engine Bay Detail </label>
          </div>
          <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" value="" id="condition">
              <label class="custom-control-label ml-2" for="condition"> Leather Surface Conditioning </label>
          </div>
        </div>
    </div>
    `
    // $('#basic-select').before(addServices)
    // $('#premium-select').before(addServices)
    // $('#deluxe-select').before(addServices)

    $('#premium-select').on('click', (e) => {
      $('#premium-card').addClass(['selected'])
      $('#premium-card').css('height', parseInt($('#premium-card').css('height')))
      //$('#premium-select').before(addServices)
      $('#premium-card .add-svcs').removeClass('d-none')
      $('#premium-card').animate({
        height: parseInt($('#premium-card').css('height')) + parseInt($('#premium-card .add-svcs').css('height'))
      }, 500, () => {
        $('#premium-card .add-svcs').animate({opacity: 1}, 500)
      })

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
