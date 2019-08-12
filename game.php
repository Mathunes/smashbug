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
    <link rel="stylesheet" href="css/style.css">
    <title>SmashBug</title>
</head>
<body>
    <div class="container-game">
        <div class="info row">
            <div class="time info-item col-6">
                <p>Tempo</p>
                <p>60</p>
            </div>
            <div class="score info-item col-6">
                <p>Pontuação</p>
                <p>0</p>
            </div>
            <div class="data-player">
                <input type="hidden" name="namePlayer" id="namePlayer" value="<?php echo $start->getName() ?>">
                <input type="hidden" name="levelGame" id="levelGame" value="<?php echo $start->getLevel() ?>">
            </div>
        </div>
        <div class="container-bug">
            <img src="assets/img/ant.svg" alt="Inseto">
        </div>
    </div>

    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/game.js"></script>
</body>
</html>