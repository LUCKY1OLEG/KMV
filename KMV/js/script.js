$(document).ready(function(){

    $(".filter-toggle").click(function(e){
    	e.preventDefault();
    	$(this).parent().next('li').slideToggle(270);
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