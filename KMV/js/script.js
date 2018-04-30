$(document).ready(function(){

    $(".filter-toggle").click(function(e){
    	e.preventDefault();
    	$(this).parent().next('li').slideToggle(270);
    });

    // $(".photoblock").hover(function(){
    //     $(this).find('.like-cart').fadeIn(1); }, function() {
    //     if (
    //         $(this).find('.like-cart').hasClass('liked')
    //     ) {}
    //     else{
    //     $(this).find('.like-cart').fadeOut(1);
    //     }
    // });

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