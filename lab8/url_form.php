<?php

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "Url";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql_check_empty = "SELECT COUNT(*) AS count FROM Urltable";
$result_check_empty = $conn->query($sql_check_empty);
$row_check_empty = $result_check_empty->fetch_assoc();
if ($row_check_empty['count'] == 0) {
    // Insert initial URLs 
    $sql_insert_initial = "INSERT INTO Urltable (url, description) VALUES
                           ('http://www.deitel.com', 'Cool site!'),
                           ('http://www.php.net', 'The official PHP site')";
    if ($conn->query($sql_insert_initial) === TRUE) {
        echo "Initial records inserted successfully<br>";
    } else {
        echo "Error inserting initial records: " . $conn->error . "<br>";
    }
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Escape user inputs for security
    $url = $conn->real_escape_string($_POST['url']);
    $description = $conn->real_escape_string($_POST['description']);
    $sql = "INSERT INTO Urltable (url, description) VALUES ('$url', '$description')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$sql = "SELECT * FROM Urltable";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>ID</th><th>URL</th><th>Description</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["id"]."</td><td>".$row["url"]."</td><td>".$row["description"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>URL Form</title>
</head>
<body>
    <h2>Submit a URL</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        URL: <input type="text" name="url"><br><br>
        Description: <input type="text" name="description"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
