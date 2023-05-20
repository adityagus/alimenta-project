<?php
$servername = "localhost";
$database = "alimeenta";
$username = "root";
$password = "";

// Create connection

$connect = mysqli_connect($servername, $username, $password, $database);

// Check connection

if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($connect);