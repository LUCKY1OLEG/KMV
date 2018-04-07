$(document).ready(function(){

    $(".filter-toggle").click(function(e){
    	e.preventDefault();
    	$(this).parent().next('div').slideToggle(0);
    	var addHeight = $(this).parent().next('div').height();
    	var parHeight = $(this).parent().parent().parent().height();
    	$(this).parent().parent().parent().height( $(this).parent().parent().parent().height(parHeight + addHeight));
    	if ($(this).parent().next('div').is(":visible")) {
    	}
    	else {
    		$(this).parent().parent().parent().height( $(this).parent().parent().parent().height(parHeight - addHeight));
    	}
    });
    $(".photoblock").hover(function(){
        $(this).find('.like-it').fadeIn(300); }, function() {
        $(this).find('.like-it').fadeOut(300);
    });
    $(".like-cart").click(function(){
        $(this).toggleClass('liked');
    });
});