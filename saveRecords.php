<?php

session_start();

    require_once 'db_connect.php';

    require_once 'Classes/Start/Start.php';

    $start = new Start();
    $start->setName($_POST['name']);
    $start->setLevel($_POST['level']);  
    $start->setScore($_POST['score']);
    $exit = filter_var($_POST['exit'], FILTER_VALIDATE_BOOLEAN);

    switch ($start->getLevel()) {
        case 1:
            $table = "records_easy";
            break;
        case 2:
            $table = "records_medium";
            break;
        case 3:
            $table = "records_hard";
            break;
    }

    $sql = "SELECT * FROM $table";
    
    $result = $con->query($sql);
    
    $record = $result->fetchAll();
    
    if ($start->getScore() > ($record[0]['score'])) { //Salvando no banco apenas os maiores recordes
        $sql = "UPDATE $table SET name = ?, score = ? WHERE id = ?";

        $stmt = $con->prepare($sql);

        $stmt->bindValue(1, $start->getName());
        $stmt->bindValue(2, $start->getScore());
        $stmt->bindValue(3, 1);
        
        $stmt->execute();
    }
    
    if ($exit) {
        header('location: index.php');
    } else {
        $start->setScore(0);
        $_SESSION['dataPlayer'] = serialize($start);

        header('location: game.php');
    }
