<?php

$con = new PDO('mysql: host=localhost:8000; dbname="smashbug', 'root', 'password'); 

if ($con->connect_error) {
    exit("Falha na conexão: ".$con->connect->error);
}