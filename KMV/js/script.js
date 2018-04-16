$(document).ready(function(){

    $(".filter-toggle").click(function(e){
    	e.preventDefault();
    	$(this).parent().next('li').slideToggle(360);
    	var addHeight = $(this).parent().next('li').height();
    	var parHeight = $(this).parent().parent().parent().height();
    	$(this).parent().parent().parent().height( $(this).parent().parent().parent().height(parHeight + addHeight));
    	if ($(this).parent().next('li').is(":visible")) {
    	}
    	else {
    		$(this).parent().parent().parent().height( $(this).parent().parent().parent().height(parHeight - addHeight));
    	}
    });

    $(".photoblock").hover(function(){
        $(this).find('.like-cart').fadeIn(0); }, function() {
        if (
            $(this).find('.like-cart').hasClass('liked')
        ) {}
        else{
        $(this).find('.like-cart').fadeOut(0);
        }
    });

    $(".like-cart").click(function(){
        $(this).toggleClass('liked');
    });

    $(".color-option").click(function(){
        $(this).toggleClass('color-clicked');
        $(this).next('input').prop('checked', function (i, value) {
        return !value;
        });
    });

});