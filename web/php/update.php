<?php
    $con = mysqli_connect('localhost', 'root', '', 'employees');
    $id = $_GET['id'];
    $sel = "SELECT * from employee where id = '$id'";
    $res = mysqli_query($con, $sel);
    $row = mysqli_fetch_assoc($res);
    // echo $id;
?>

<!-- <form action="updating.php" method="GET"> -->
<form action="update.php" method="GET">
    <input type="hidden" name="uid" value = "<?php echo $row['id']; ?>"><br>
    name: <input type="text" name="uname" value = "<?php echo $row['firstname']; ?>"><br>
    address: <input type="text" name="uadd" value = "<?php echo $row['lastname']; ?>"><br>
    contact: <input type="text" name="ucon" value = "<?php echo $row['email']; ?>"><br>
    <input type="submit" name="update" value="update">
</form>

<?php
    if (isset($_GET['update'])){
        $id = $_GET['uid'];
        $name = $_GET['uname'];
        $address = $_GET['uadd'];
        $contact = $_GET['ucon'];
        $query = "UPDATE employee set firstname='$name', lastname='$address', email='$contact' where id='$id'";
        $r = mysqli_query($con, $query);
        if($r){
            header("Location: dispaly.php");
        } else
            echo "update failed";
    }
?>