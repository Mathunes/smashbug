<?php

    session_start();

    if (!isset($_SESSION['dataPlayer'])) {
        header('location: index.php');
    }
    
    session_destroy();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SmashBug</title>
</head>
<body>
    
</body>
</html>