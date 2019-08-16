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

            if ($('body').width() < 1200) {
                $('body').css({
                    backgroundImage: 'url(/assets/img/background2Darkmode.png)'
                })
            } else {
                $('body').css({
                    backgroundImage: 'url(/assets/img/backgroundDarkmode.png)'
                })
            }

        $('#logo').attr('src', 'assets/img/logosmash-darkmode.png');

        $('.form form label').addClass('darkmode-activate-text');

        $('.records h2').addClass('darkmode-activate-text');

        $('.records table').addClass('darkmode-activate-text');

        $('.modal-container .btn-success').addClass('darkmode-btn');

        darkmode = true;
    }

    function darkmodeDisable() {
        $('#darkmode').attr('src', 'assets/img/firefly.png');

        $('body')
            .removeClass('darkmode-activate')

        if ($('body').width() < 1200) {
            $('body').css({
                backgroundImage: 'url(/assets/img/background2.png)'
            })
        } else {
            $('body').css({
                backgroundImage: 'url(/assets/img/background.png)'
            })
        }

        $('#logo').attr('src', 'assets/img/logosmash.png');

        $('.form form label').removeClass('darkmode-activate-text');

        $('.records h2').removeClass('darkmode-activate-text');

        $('.records table').removeClass('darkmode-activate-text');

        $('.modal-container .btn-success').removeClass('darkmode-btn');

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