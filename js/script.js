$(function(){

    function darkmodeActivate() {
        $('#darkmode').attr('src', 'assets/img/firefly.png');

        $('body').css({
            backgroundColor: '#2B2B2B',
            transition: '0.4s'
        });
    }

    function darkmodeDisable() {
        $('#darkmode')
            .attr('src', 'assets/img/firefly-dark.png')
            .css({
                transition: '0.4s'
            });

        $('body').css({
            backgroundColor: '#fff'
        });
    }

    $('#darkmode').click(function(){

        if ($(this).attr('src' ) == 'assets/img/firefly-dark.png') {

            darkmodeActivate();

        } else if ($(this).attr('src') == 'assets/img/firefly.png') {
        
            darkmodeDisable();
        }
        
    })

})