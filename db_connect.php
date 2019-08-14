<?php

try {
    $con = new PDO('mysql: host=localhost:8000; dbname=smashbug', 'root', 'password'); 
    
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo "Falha na conexão: " . $e->getMessage();
}
?>