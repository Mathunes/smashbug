$(function(){

    var darkmode = false;

    function darkmodeActivate() {
        $('#darkmode').attr('src', 'assets/img/firefly-darkmode.png');

        $('body').css({
            backgroundColor: '#2B2B2B',
            transition: '0.4s'
        });

        $('#logo').attr('src', 'assets/img/logosmash-darkmode.png');

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

        darkmode = false;
    }

    $('#darkmode').click(function(){

        if (!darkmode) {

            darkmodeActivate();

        } else {
        
            darkmodeDisable();
        }
        
    })

})