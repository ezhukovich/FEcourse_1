$(document).on('click', '.mobile-option .mobile-option--btn', (e) => {
  $('.mobile-option .mobile-option--btn').toggleClass('active');
  $('nav').toggleClass('mobile-list');
});
