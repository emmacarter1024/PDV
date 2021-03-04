

$(".expandable").on('click', function () {
    $(this).children('img').toggleClass("expanded-img");
    $(this).next(".expandable-content").toggle();
    
});