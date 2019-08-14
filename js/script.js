$(function(){

    var darkmode;

    if (sessionStorage.getItem('darkmode') == 'false') {
        darkmode = false;
    } else if (sessionStorage.getItem('darkmode') == 'true') {
        darkmode = true;
        darkmodeActivate('0');
    } else {
        darkmode = false;
    }

    sessionStorage.setItem('darkmode', darkmode);

    function darkmodeActivate(transition = '0.3s') {
        $('#darkmode')
            .attr('src', 'assets/img/firefly-darkmode.png')
            .addClass('firefly-darkmode')

        $('body')
            .addClass('darkmode-activate')
            .css({
                transition: transition
            })

        $('#logo').attr('src', 'assets/img/logosmash-darkmode.png');

        $('.form form label').addClass('darkmode-activate');

        $('.records h2').addClass('darkmode-activate');

        $('.records table').addClass('darkmode-activate');

        $('.modal-container .btn').addClass('darkmode-activate');

        darkmode = true;
    }

    function darkmodeDisable() {
        $('#darkmode').attr('src', 'assets/img/firefly.png');

        $('body').removeClass('darkmode-activate');

        $('#logo').attr('src', 'assets/img/logosmash.png');

        $('.form form label').removeClass('darkmode-activate');

        $('.records h2').removeClass('darkmode-activate');

        $('.records table').removeClass('darkmode-activate');

        $('.modal-container .btn').removeClass('darkmode-activate');

        darkmode = false;
    }

    $('#darkmode').click(function(){

        if (!darkmode) {

            darkmodeActivate();

        } else {
        
            darkmodeDisable();

        }
        sessionStorage.setItem('darkmode', darkmode);
    });

})