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
        <div class="row">
            <div class="col-8">
                <img src="assets/img/logosmash.png" alt="Logo SmashBug" id="logo">
            </div>
            <div class="col-4 container-darkmode">
                <img src="assets/img/firefly.png" alt="Vagalume tomada do darkmode" id="darkmode" class="align-middle">
            </div>
        </div>

        <div class="form">
            <form action="startgame.php" method="post">
                <label for="level" class="form-group" id="level-title">Nível</label>
                <select name="level" class="form-control" id="level">
                    <option value="1">Fácil</option>
                    <option value="2">Médio</option>
                    <option value="3">Difícil</option>
                </select>

                <input type="text" name="name" maxlength="10" placeholder="Nome do jogador" class="form-control" id="name">

                <input type="submit" value="Jogar" name="start" class="form-control">
            </form>
        </div>

        <div class="records">
            <h2>Recordes</h2>
            <table class="table">
                <thead>
                    <tr class="row">
                        <th class="col-4">Fácil</th>
                        <th class="col-4">Médio</th>
                        <th class="col-4">Difícil</th>
                    </tr>
                </thead>
            </table>

        </div>


        <div class="modal-container d-flex justify-content-center">

            <button type="button" class="btn" data-toggle="modal" data-target="#modal-about">
                Sobre
            </button>

            
            <div class="modal fade" id="modal-about" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Sobre</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            Apenas esmague os insetos!
                        </div>
                        <div class="modal-footer text-center">
                            <div>
                                <h6>Contato</h6>
                               <a href="mailto:matheusantunes720@gmail.com">matheusantunes720@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>
</html>