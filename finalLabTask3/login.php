<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $role = $_POST["role"];

    $file = fopen("users.txt", "a");
    fwrite($file, $username . "," . $password . "," . $role . "\n");
    fclose($file);

    echo "Registration successful!";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>

<h2>Register</h2>

<form method="POST">
    Username: <input type="text" name="username"><br><br>
    Password: <input type="password" name="password"><br><br>

    Role:
    <select name="role">
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
    </select><br><br>

    <input type="submit" value="Register">
</form>

<a href="login.php">Go to Login</a>

</body>
</html>