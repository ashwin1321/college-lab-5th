<?php

// Create connection
$conn = mysqli_connect('localhost', 'root','', 'Employees');
// Check connection
if (!$conn) {
  echo("Connection failed: " . mysqli_connect_error());
}

// Create database
// $sql = "CREATE DATABASE Employees";
// if (mysqli_query($conn, $sql)) {
//   echo "Database created successfully";
// } else {
//   echo "Error creating database: ";
// }

// // sql to create table
// $sql = "CREATE TABLE Employee (
//     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     firstname VARCHAR(30) NOT NULL,
//     lastname VARCHAR(30) NOT NULL,
//     email VARCHAR(50),
//     reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//     )";
    
//     if ($conn->query($sql) === TRUE) {
//       echo "Table  created successfully";
//     } else {
//       echo "Error creating table: " . $conn->error;
//     }

    // Inserting data into table
    $sql = "INSERT INTO Employee (firstname, lastname, email) VALUES ('Ram', 'Kumar', 'ramkumar@gmail.com' )";
    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>