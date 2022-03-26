<?php
    $id=$_GET['id'];
    $connect=mysqli_connect("localhost","root","","employees");
    $del="DELETE from employee where id='$id'";

    $result=mysqli_query($connect,$del);
    if($result)
        header("location:dispaly.php");
    else
        echo "error while deleting data";

?>