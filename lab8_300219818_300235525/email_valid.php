<?php
function validateEmail($email) {
    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
    if (preg_match($pattern, $email)) {
        return true; 
    } else {
        return false; 
    }
}

// Test valid email addresses
$validEmails = array(
    "test@example.com",
    "user1234@email.co.uk",
    "john.doe123@subdomain.domain.com"
);

echo "Valid email addresses:\n";
foreach ($validEmails as $email) {
    if (validateEmail($email)) {
        echo "$email is valid.\n";
    } else {
        echo "$email is invalid.\n";
    }
}

// Test invalid email addresses
$invalidEmails = array(
    "invalidEmail.com",
    "user@domain",
    "user123@.com"
);

echo "\nInvalid email addresses:\n";
foreach ($invalidEmails as $email) {
    if (validateEmail($email)) {
        echo "$email is valid.\n";
    } else {
        echo "$email is invalid.\n";
    }
}

?>
