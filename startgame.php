<?php

session_start();

if (!isset($_POST['start'])) {
    header('location: index.php');
}

require_once 'db_connect.php';

$name = $_POST['name'];
