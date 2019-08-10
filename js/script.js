$(function(){

    function darkmodeActivate() {
        $('body').css({
            backgroundColor: '#2B2B2B'
        })
    }

    $('#darkmode').click(function(){
        if ($(this).attr('src' ) == 'assets/img/firefly-dark.png') {
            $(this).attr('src', 'assets/img/firefly.png');
            darkmodeActivate();
        } else if ($(this).attr('src') == 'assets/img/firefly.png') {
            $(this).attr('src', 'assets/img/firefly-dark.png');
        }
        
    })

})