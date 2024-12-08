<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "calle_mush_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $customerName = $_POST['full-name'];
    $contactNumber = $_POST['contact-number'];
    $email = $_POST['email-address'];
    $fbLink = $_POST['facebook-link'];
    $eventDate = $_POST['date-input'];
    $eventTime = $_POST['time-input'];
    $eventDescription = $_POST['description-input'];

    $sql = "INSERT INTO events_booked (customer_name, contact_number, customer_email, facebook_link, event_date, event_time, event_description) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $customerName, $contactNumber, $email, $fbLink, $eventDate, $eventTime, $eventDescription);
    if ($stmt->execute()) {
        // Return a success message
        echo "success";
    } else {
        // Return an error message
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
