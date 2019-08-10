<?php

session_start();

if (!isset($_POST['start'])) {
    header('location: index.php');
}

require_once 'db_connect.php';

require_once 'Classes/Start/Start.php';

$start = new Start();
$start->setName($_POST['name']);
$start->setLevel($_POST['level']);

