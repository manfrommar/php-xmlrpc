<h1>Hello Cloudreach!</h1>
<h4>Attempting MySQL connection from php...</h4>
<?php
$host = '192.168.1.249';
$user = 'opensimuser';
$pass = 'opensimdb99';
$dbname = 'robust';
$conn = mysql_connect($host, $user, $pass);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected to MySQL successfully!";
?>
