<?php

session_start();

    require_once 'db_connect.php';

    require_once 'Classes/Start/Start.php';

    $start = new Start();
    $start->setName($_POST['name']);
    $start->setLevel($_POST['level']);

    if ($start->getLevel() == '') {
        header('location: index.php');
    } else {
        $_SESSION['dataPlayer'] = serialize($start);

        header('location: game.php');
    }

    