$(function(){

    var darkmode = false;

    function darkmodeActivate() {
        $('#darkmode').attr('src', 'assets/img/firefly-darkmode.png');

        $('body').css({
            backgroundColor: '#2B2B2B',
            transition: '0.4s'
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