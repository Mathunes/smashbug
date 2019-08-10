$(function(){

    $('#darkmode').click(function(){
        if ($(this).attr('src' ) == 'assets/img/firefly-dark.png') {
            $(this).attr('src', 'assets/img/firefly.png');
        } else if ($(this).attr('src') == 'assets/img/firefly.png') {
            $(this).attr('src', 'assets/img/firefly-dark.png');
        }
        
    })

})