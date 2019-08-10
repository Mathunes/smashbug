<?php
    session_start();
    if (isset($_POST['start'])) {
        $_SESSION['start'] = true;
    }
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
    <div class="container">
        <img src="assets/img/logosmash.png" alt="Logo SmashBug" id="logo" class="rounded mx-auto d-block">

        <div class="form">
            <form action="startgame.php" method="post">
                <label for="level" class="form-group" id="level-title">Nível</label>
                <select name="level" class="form-control" id="level">
                    <option value="">Fácil</option>
                    <option value="">Médio</option>
                    <option value="">Difícil</option>
                </select>

                <input type="text" name="name" maxlength="10" placeholder="Nome do jogador" class="form-control" id="name">

                <input type="submit" value="Jogar" name="start" class="form-control">
            </form>
        </div>

        <div class="records">
            <h2>Recordes</h2>
            <table class="table">
                <thead>
                    <th>Fácil</th>
                    <th>Médio</th>
                    <th>Difícil</th>
                </thead>
            </table>

        </div>

    </div>
    

</body>
</html>