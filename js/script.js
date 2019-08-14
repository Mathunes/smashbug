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
        $('#darkmode').attr('src', 'assets/img/firefly-darkmode.png');

        $('body')
            .addClass('darkmodeActivate')
            .css({
                transition: transition
            })

        $('#logo').attr('src', 'assets/img/logosmash-darkmode.png');

        $('.form form label').addClass('darkmodeActivate');

        $('.records h2').addClass('darkmodeActivate');

        $('.records table').addClass('darkmodeActivate');

        $('.modal-container .btn').addClass('darkmodeActivate');

        darkmode = true;
    }

    function darkmodeDisable() {
        $('#darkmode').attr('src', 'assets/img/firefly.png');

        $('body').removeClass('darkmodeActivate');

        $('#logo').attr('src', 'assets/img/logosmash.png');

        $('.form form label').removeClass('darkmodeActivate');

        $('.records h2').removeClass('darkmodeActivate');

        $('.records table').removeClass('darkmodeActivate');

        $('.modal-container .btn').removeClass('darkmodeActivate');

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