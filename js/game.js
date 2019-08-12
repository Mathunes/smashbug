$(function(){
    function timeControl(){
        var seconds = $('.container-game .info .time p:last').text();
        seconds--;
        $('.container-game .info .time p:last').text(seconds);
    }

    function scoreAdd(){
        var score = $('.container-game .info .score p:last').text();
        score++;
        $('.container-game .info .score p:last').text(score);
    }

    function randomStartPosition(sizeBug) {
        var width = $('.container-game .container-bug').width();
        var height = $('.container-game .container-bug').height();

        var positionX = Math.floor(Math.random() * width);
        var positionY = Math.floor(Math.random() * height);

        if (positionX < 80) {
            positionX = 80;
        } else {
            positionX -= 80;
        }

        if (positionY < 80) {
            positionY = 80;
        } else {
            positionY -= 80;
        }

        $('.container-game .container-bug img').css({
            left: positionX+'px',
            top: positionY+'px',
            width: '80px',
            transition: '.2s'
        })
    }

    function moveBug(){
        var width = $('.container-game .container-bug').width();
        var height = $('.container-game .container-bug').height();

        var positionX = Math.floor(Math.random() * width);
        var positionY = Math.floor(Math.random() * height);

        if (positionX < 80) {
            positionX = 80;
        } else {
            positionX -= 80;
        }

        if (positionY < 80) {
            positionY = 80;
        } else {
            positionY -= 80;
        }

        $('.container-game .container-bug img').css({
            left: positionX+'px',
            top: positionY+'px',
            transition: 'all 1s',
            webkitTransition: 'all 1s',
        })
    }

    function getLevel() {
        console.log($('.container-game .info .data-player').val());
    }

    getLevel();

    randomStartPosition();

    setInterval(function(){
        
        timeControl();
        moveBug();
        
    }, 1000);

    $('.container-game .container-bug img').click(scoreAdd);
})