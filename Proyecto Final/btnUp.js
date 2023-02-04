// Vi varios ejemplos pero esta parte no me da el resultado deseado. No sé dónde puede ser que esté el error //
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('#cm-up').slideDown(300);
        } else {
            $('#cm-up').slideUp(300);
        }
    });
    $('#cm-up').on('click' , function(){
        $('body, html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});