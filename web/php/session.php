<?php
    session_start();
    $_SESSION['name'] = "session ";
    echo $_SESSION['name'];
    
    session_unset();
?>