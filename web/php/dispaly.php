<table border="1px" align="center">
    <tr>
        <th>id</th>
        <th>firstname</th>
        <th>lastmane</th>
        <th>email</th>
        <th>edit</th>
        <th>delete</th>
    </tr>


<?php
$con = mysqli_connect('localhost','root','','Employees');
$query = "SELECT * from employee order by id desc";
$res = mysqli_query($con,$query);
// if($res){
//     echo "data is collected";
// }

// else
// echo "data is not collected";

while ($row = mysqli_fetch_assoc($res)){
    // echo $row['name'];


    ?>

<tr>
    <td><?php echo $row['id']; ?> </td>
    <td><?php echo $row['firstname']; ?> </td>
    <td><?php echo $row['lastname']; ?> </td>
    <td><?php echo $row['email']; ?> </td>
    <td><a href="update.php?id=<?php echo $row['id']; ?>">edit</a></td>
    <td><a href="delete.php?id=<?php echo $row['id']; ?>">delete</a></td>
</tr>
<?php
} 
?>
</table>