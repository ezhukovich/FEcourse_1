$(".nav li").on("click", function (event) {
    let li = $('.nav_items');
    let content = $('.content');
    li.removeClass('active');
    content.removeClass('active');
    li.children().removeClass('active');
});

$(".nav_items").on("click", function (event) {
    $(this).addClass('active');
    $(this).children().addClass('active');
    let liAttr = $(this).attr('data-id');
    console.log(liAttr);

    let activeTab = $('.content[data-id="' + liAttr + '"]');

    activeTab.addClass('active');
    
    // console.log(event.currentTarget);
    // console.log(this);
    
});