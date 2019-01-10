$(document).ready(() => {

  const startOverlay = (id) => {
    $('.overlay-veil').fadeTo("1500", "0.8", () => {
      const element = $(`div[data-item="${id}"]`);
      element.fadeIn("300");
      element.addClass('active');
    })
  }

  const closeOverlayAll = (id) => {
    $('.overlay-component').each(function(){
      if($(this).hasClass('active')) {
        $('.overlay-veil').fadeOut();
        $(this).fadeOut("300", () => {
          $(this).removeClass('active');
        });
      }
    })
    id ? startOverlay(id) : null;

   
  }

  $('.close-overlay').on('click', function() {
    closeOverlayAll(false);
  })



  $('.overlay-item-click').on('click', function(e){
    e.preventDefault();
    let overlayId = $(this).data("overlay");
    closeOverlayAll(overlayId);
  })
})