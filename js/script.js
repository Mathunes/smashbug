$(function(){

    var darkmode = false;
    sessionStorage.setItem('darkmode', darkmode);

    function darkmodeActivate() {
        $('#darkmode').attr('src', 'assets/img/firefly-darkmode.png');

        $('body')
            .addClass('darkmodeActivate')
            .css({
                transition: '0.3s'
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
            sessionStorage.setItem('darkmode', darkmode);        

        } else {
        
            darkmodeDisable();
            sessionStorage.setItem('darkmode', darkmode);

        }
        
    });

})