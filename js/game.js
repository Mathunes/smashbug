$(function(){

    var darkmode;
    var timer;
    var move;
    var score = 0;

    if (sessionStorage.getItem('darkmode') == 'false') {
        darkmode = false;
    } else if (sessionStorage.getItem('darkmode') == 'true') {
        darkmode = true;
        darkmodeActivate();
    } else {
        darkmode = false;
    }

    function darkmodeActivate() {
        $('body').addClass('darkmode-activate');
        $('.container-game .info button').addClass('darkmode-activate');
        $('.container-game .info button').mouseover(function () { 
            $(this).css({
                color: '#fff'
            })
        });
        darkmode = true;
    }

    function darkmodeDisable() {
        $('body').removeClass('darkmode-activate');
        $('.container-game .info button').mouseover(function () { 
            $(this).css({
                color: '#000'
            })
        });
        darkmode = false;
    }

    if (darkmode) {
        darkmodeActivate();
    } else {
        darkmodeDisable();
    }

    sessionStorage.setItem('darkmode', darkmode);

    function getLevel() {
        return parseInt($('.container-game .info #data-player input#level-game').val());
    }

    function getName() {
        return $('.container-game .info #data-player input#name-player').val();
    }

    function getScore() {
        return score;
    }

    function timeControl(){
        var seconds = $('.container-game .info .time p:last').text();
        seconds--;
        $('.container-game .info .time p:last').text(seconds);
        if (seconds == 0) {
            $('#modal-exitgame').modal('hide');
            endGame();
        }
    }

    function scoreAdd(){
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
            $('.container-game .container-bug img#bug').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '80px',
                transition: '.2s'
            });
            $('.container-game .container-bug img#bug').show('fast');

        } else if (width > 800) {
            $('.container-game .container-bug img#bug').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '70px',
                transition: '.2s'
            });
            $('.container-game .container-bug img#bug').show('fast');

        } else if (width > 500) {
            $('.container-game .container-bug img#bug').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '60px',
                transition: '.2s'
            });
            $('.container-game .container-bug img#bug').show('fast');

        } else if (width > 400) {
            $('.container-game .container-bug img#bug').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '50px',
                transition: '.2s'
            });
            $('.container-game .container-bug img#bug').show('fast');

        } else {
            $('.container-game .container-bug img#bug').css({
                left: positionX+'px',
                top: positionY+'px',
                width: '40px',
                transition: '.2s'
            });
            $('.container-game .container-bug img#bug').show('fast');
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

        $('.container-game .container-bug img#bug').css({
            left: positionX+'px',
            top: positionY+'px',
            transition: 'all 1s',
            webkitTransition: 'all 1s',
        })
    }

    function changeLevelBug(level) {
        if (darkmode) {
            $('.container-game .container-bug img#bug')
                .attr('src', 'assets/img/firefly-darkmode.png')
                .addClass('firefly-darkmode');
        } else {
            switch(level) {
                case 1:
                    $('.container-game .container-bug img#bug').attr('src', 'assets/img/ant.svg');
                    break;
                case 2:
                    $('.container-game .container-bug img#bug').attr('src', 'assets/img/cockroach.svg');
                    break;
                case 3:
                    $('.container-game .container-bug img#bug').attr('src', 'assets/img/wasp.svg');
                    break;
            }
        }
    }

    function start() {

        var level = getLevel();

        $('.container-game .container-bug img#bug').hide();

        $('.container-game .info .time p:last-child').text('60');
        
        timer = setInterval(timeControl, 1000);

        randomStartPosition();
        changeLevelBug(level);

        switch (level) {
            case 1:
                move = setInterval(function(){
                    moveBug();
                }, 1000);
                break;
            case 2:
                move = setInterval(function(){
                    moveBug();
                }, 800);
                break;
            case 3:
                move = setInterval(function(){
                    moveBug();
                }, 700);
                break;
        }
    }

    function endGame() {
    
        clearInterval(timer);

        if (getName() != "") {
            $('#modal-endgame .modal-dialog .modal-content .modal-body #name-endgame').text(getName());
        }
        
        $('#modal-endgame .modal-dialog .modal-content .modal-body #score-endgame').text(getScore());

        $('.container-game .info #data-player #score-game').attr('value', getScore());

        $('#modal-endgame').modal('show');

        $('#modal-endgame .modal-dialog .modal-content .modal-footer .row:first-child #new-game').click(function(){
            //Novo jogo
            $('.container-game .info #data-player #exit').val(false); //Enviado para o back se é para finalizar o jogo
            $('.container-game .info #data-player').submit();
        })

        $('#modal-endgame .modal-dialog .modal-content .modal-footer .row:last-child #exit').click(function(){
            //Sair
            $('.container-game .info #data-player #exit').val(true); //Enviado para o back se é para finalizar o jogo
            $('.container-game .info #data-player').submit();
        })
    }

    function exitGame() {
        $('#modal-exitgame').modal('show');

        $('#modal-exitgame .modal-dialog .modal-content .modal-footer .row .col-6:first-child button#yes').click(function(){
            $(location).attr('href', 'index.php');
        });
        $('#modal-exitgame .modal-dialog .modal-content .modal-footer .row .col-6:last-child button#no').click(function(){
            $('#modal-exitgame').modal('hide');
        });
    }

    function showBlot() {
        var position = $('.container-game .container-bug img').position();
        var top = position.top;
        var left = position.left;
        
        var img = document.createElement('img');
        img.src = 'assets/img/blot.png';
        img.alt = 'Vetor criado por milano83 - br.freepik.com - link: https://br.freepik.com/fotos-vetores-gratis/mao';

        $('.container-game .container-bug').append(img);

        $('.container-game .container-bug img:last-child')
            .css({
                position: 'absolute',
                width: '80px',
                zIndex: '-10',
                opacity: '0.7',
                top: top,
                left: left
            })

    }

    start();

    $('.container-game .info button').click(exitGame);
    $('.container-game .container-bug img#bug')
        .click(scoreAdd)
        .click(showBlot);
})