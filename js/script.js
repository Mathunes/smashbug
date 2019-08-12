$(function(){

    var darkmode = false;

    function darkmodeActivate() {
        $('#darkmode').attr('src', 'assets/img/firefly-darkmode.png');

        $('body').css({
            backgroundColor: '#2B2B2B',
            transition: '0.4s'
        });

        $('#logo').attr('src', 'assets/img/logosmash-darkmode.png');

        $('.form form label').css({
            color: '#fff'
        });

        $('.records h2').css({
            color: '#fff'
        });

        $('.records table').css({
            color: '#fff'
        });

        $('.modal-container .btn').css({
            color: '#fff'
        });

        darkmode = true;
    }

    function darkmodeDisable() {
        $('#darkmode')
            .attr('src', 'assets/img/firefly.png')
            .css({
                transition: '0.4s'
            });

        $('body').css({
            backgroundColor: '#fff'
        });

        $('#logo').attr('src', 'assets/img/logosmash.png');

        $('.form form label').css({
            color: '#000'
        });

        $('.records h2').css({
            color: '#000'
        });

        $('.records table').css({
            color: '#000'
        });

        $('.modal-container .btn').css({
            color: '#000'
        });

        darkmode = false;
    }

    $('#darkmode').click(function(){

        if (!darkmode) {

            darkmodeActivate();

        } else {
        
            darkmodeDisable();
        }
        
    });

    // =====================================================================================================

})