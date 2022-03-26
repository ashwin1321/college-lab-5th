<?php
    if(isset($_POST['login'])){
        session_start();
        $con = mysqli_connect("localhost", "root", "",  "login");

        $name = $_POST['uname'];
        $pass = $_POST['upass'];

        $sql = "SELECT username, password from login_details where username='$name' and password = '$pass'";
        $res = mysqli_query($con, $sql);
        $count = mysqli_num_rows($res);

        if($count==0)
            echo "user name and password mismatch!!";
        else{
            $_SESSION['name'] =$name;
            header('location:welcome.php');
        }
    }
    else{
        echo "illegal access";
    }
?>