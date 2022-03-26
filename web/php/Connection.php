<?php
    $connection=mysqli_connect("localhost","root","","students");
    if(!$connection){
        echo("Database connection failed");
    }
    else{
        echo("Database connection success");
    }
?>