<?php

    session_start();
    require_once 'Classes/Start/Start.php';

    if (!isset($_SESSION['dataPlayer'])) {
        header('location: index.php');
    }

    $start = unserialize($_SESSION['dataPlayer']);

    session_destroy();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/game.css">
    <title>SmashBug</title>
</head>
<body>
    <div class="container-game">

        <div class="info row">
            <div class="time info-item col-6">
                <p>Tempo</p>
                <p>1</p>
            </div>
            <div class="score info-item col-6">
                <p>Pontuação</p>
                <p>0</p>
            </div>
            <form action="saveRecords.php" method="post" id="data-player">
                <input type="hidden" name="name" id="name-player" value="<?php echo $start->getName() ?>">
                <input type="hidden" name="level" id="level-game" value="<?php echo $start->getLevel() ?>">
                <input type="hidden" name="score" id="score-game" value="">
                <input type="hidden" name="exit" id="exit" value="">
            </form>
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        
        <div class="container-bug">
            <img src="assets/img/ant.svg" alt="Inseto">
        </div>

        <div class="modal-container d-flex justify-content-center">            
            <div class="modal fade" id="modal-endgame" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">Fim de jogo</h2>
                        </div>
                        <div class="modal-body text-center">
                            <h3>Jogador</h3>
                            <p id="name-endgame">-</p>
                            <h3>Pontuação</h3>
                            <p id="score-endgame">0</p>
                        </div>
                        <div class="modal-footer text-center">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-primary" id="new-game">Novo jogo</button>
                                </div>
                                <div class="col-6">
                                    <button type="submit" class="btn btn-primary" id="exit">Sair</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-container-exit d-flex justify-content-center">            
            <div class="modal fade" id="modal-exitgame" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">Sair do jogo</h2>
                        </div>
                        <div class="modal-body text-center">
                            <h3>Deseja realmente finalizar a partida?</h3>
                            <p>Os dados não serão dados.</p>
                        </div>
                        <div class="modal-footer text-center">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-primary" id="yes">Sim</button>
                                </div>
                                <div class="col-6">
                                    <button type="submit" class="btn btn-primary" id="no">Não</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/game.js"></script>
</body>
</html>