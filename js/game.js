$(function(){

    function getLevel() {
        return parseInt($('.container-game .info .data-player input#level-game').val());
    }

    function getName() {
        return $('.container-game .info .data-player input#name-player').val();
    }

    function getScore() {
        return $('.container-game .info .score p:last').text();
    }

    var timer;

    function timeControl(){
        var seconds = $('.container-game .info .time p:last').text();
        seconds--;
        $('.container-game .info .time p:last').text(seconds);
        if (seconds == 0) {
            endGame();
        }
    }

    function scoreAdd(){
        var score = $('.container-game .info .score p:last').text();
        score++;
        $('.container-game .info .score p:last').text(score);
    }

    var width = $('.container-game .container-bug').width();
    var height = $('.container-game .container-bug').height();

    function randomStartPosition() {

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

        if (width > 1200) {
            $('.container-game .container-bug img').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '80px',
                transition: '.2s'
            })
        } else if (width > 800) {
            $('.container-game .container-bug img').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '70px',
                transition: '.2s'
            })
        } else if (width > 500) {
            $('.container-game .container-bug img').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '60px',
                transition: '.2s'
            })
        } else if (width > 400) {
            $('.container-game .container-bug img').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '50px',
                transition: '.2s'
            })
        } else {
            $('.container-game .container-bug img').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '40px',
                transition: '.2s'
            })
        }

        
    }

    function moveBug(){

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

    function changeLevelBug(level) {
        switch(level) {
            case 1:
                $('.container-game .container-bug img').attr('src', 'assets/img/ant.svg');
                break;
            case 2:
                $('.container-game .container-bug img').attr('src', 'assets/img/cockroach.svg');
                break;
            case 3:
                $('.container-game .container-bug img').attr('src', 'assets/img/wasp.svg');
                break;
        }
    }
    
    var move;

    function start() {

        var level = getLevel();

        $('.container-game .info .time p:last-child').text('1');
        $('#modal-endgame').modal('hide');
        
        timer = setInterval(timeControl, 1000);

        randomStartPosition();
        changeLevelBug(level);

        switch (level) {
            case 1:
                move = setInterval(function(){
                    moveBug();
                }, 800);
                break;
            case 2:
                move = setInterval(function(){
                    moveBug();
                }, 600);
                break;
            case 3:
                move = setInterval(function(){
                    moveBug();
                }, 400);
                break;
        }    
    }

    function endGame() {
        var score = getScore();
        var name = getName();
        var level = getLevel();

        clearInterval(timer);
        $('#modal-endgame').modal('show');

        $('#modal-endgame .modal-dialog .modal-content .modal-footer .row:first-child #new-game').click(function(){
            $('.container-game .info #data-player').submit();
        })

        $('#modal-endgame .modal-dialog .modal-content .modal-footer .row:last-child #exit').click(function(){
            $(location).attr('href', 'index.php');
        })
    }

    start();
    $('.container-game .container-bug img').click(scoreAdd);
})