<?php
// Set up MySQL database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set CORS headers to allow requests from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST"); // Allow only POST requests
header("Access-Control-Allow-Headers: Content-Type"); // Allow only Content-Type header

// Handle POST request from register.js
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if all required fields are present
    if (isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['age']) && isset($_POST['dob']) && isset($_POST['contact'])) {
        // Sanitize input data (you can add more sanitization as needed)
        $firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
        $lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $age = intval($_POST['age']); // Assuming age is an integer
        $dob = mysqli_real_escape_string($conn, $_POST['dob']);
        $contact = mysqli_real_escape_string($conn, $_POST['contact']);

        // Hash the password (you should use a stronger hashing method like bcrypt in production)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Prepare SQL statement to insert user data into the users table
        $sql = "INSERT INTO users (first_name, last_name, email, password, age, dob, contact) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssiss", $firstName, $lastName, $email, $hashedPassword, $age, $dob, $contact);

        // Execute the prepared statement
        if ($stmt->execute()) {
            // Registration successful
            $response = ['success' => true, 'message' => 'User registered successfully'];
            echo json_encode($response);
        } else {
            // Registration failed
            $response = ['success' => false, 'message' => 'Error registering user'];
            echo json_encode($response);
        }

        // Close statement and connection
        $stmt->close();
    } else {
        // Required fields not provided
        $response = ['success' => false, 'message' => 'Please fill out all required fields'];
        echo json_encode($response);
    }

    // Close connection
    $conn->close();
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    $response = ['success' => false, 'message' => 'Invalid request method'];
    echo json_encode($response);
}
?>
