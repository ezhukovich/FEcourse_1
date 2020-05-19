$(document).on('click', '.mobile-option .mobile-option--btn', (event) => {
    $('.mobile-option .mobile-option--btn').toggleClass('active');
    $('nav').toggleClass('mobile-list');
});