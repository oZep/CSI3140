<?php
// connect to your own DB
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "URLs";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initial URLs
$sql_check_empty = "SELECT * FROM urltable";
$result_check_empty = $conn->query($sql_check_empty);
if ($result_check_empty->num_rows == 0) {
    $sql_insert_initial = "INSERT INTO urltable (URL, description) VALUES
    ('www.deitel.com', 'Cool site!'),
    ('www.php.net', 'The official PHP site')";
    if ($conn->query($sql_insert_initial) === TRUE) {
        echo "Initial URLs inserted successfully.<br>";
    } else {
        echo "Error inserting initial URLs: " . $conn->error . "<br>";
    }
}

// if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $url = $_POST["url"];
    $description = $_POST["description"];
    
    $stmt = $conn->prepare("INSERT INTO urltable (URL, description) VALUES (?, ?)");
    $stmt->bind_param("ss", $url, $description);

    $stmt->execute();
}


$sql = "SELECT * FROM urltable";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>ID</th><th>URL</th><th>Description</th></tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["ID"]."</td><td>".$row["URL"]."</td><td>".$row["description"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>

<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
  URL: <input type="text" name="url"><br>
  Description: <input type="text" name="description"><br>
  <input type="submit" value="Submit">
</form>
