setTimeout(function(){
        const $=jQuery;
        var offset = 220;
        var duration = 500;
        //$(document).foundation();
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.cd-top').fadeIn(duration);
            } else {
                $('.cd-top').fadeOut(duration);
            }
        });
        $('.cd-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
},3000);