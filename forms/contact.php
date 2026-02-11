<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
$phpmailerPath = __DIR__ . '/../assets/vendor/phpmailer/src/';

if (!file_exists($phpmailerPath . 'PHPMailer.php')) {
  die('PHPMailer not found at: ' . $phpmailerPath);
}

require_once $phpmailerPath . 'Exception.php';
require_once $phpmailerPath . 'PHPMailer.php';
require_once $phpmailerPath . 'SMTP.php';


// Allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(403);
  echo "Forbidden";
  exit;
}

// Required fields
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $field) {
  if (empty($_POST[$field])) {
    http_response_code(400);
    echo "Please fill all required fields.";
    exit;
  }
}

// Sanitize
$name    = strip_tags(trim($_POST['name']));
$email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$subject = strip_tags(trim($_POST['subject']));
$message = trim($_POST['message']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Invalid email address.";
  exit;
}

$mail = new PHPMailer(true);

try {
  // SMTP SETTINGS
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';     // SMTP server
  $mail->SMTPAuth   = true;
  $mail->Username   = 'feel619patel@gmail.com'; // SMTP email
  $mail->Password   = 'rekxoqgxcclxljml';   // Gmail App Password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;
// $mail->SMTPDebug = 2;
// $mail->Debugoutput = 'html';

  // EMAIL SETTINGS
  $mail->setFrom($mail->Username, 'Website Contact');
  $mail->addAddress('feel619patel@gmail.com'); // Receive here
  $mail->addReplyTo($email, $name);

  $mail->isHTML(true);
  $mail->Subject = "Contact Form: $subject";

  $mail->Body = "
    <h3>New Contact Form Message</h3>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Subject:</strong> {$subject}</p>
    <p><strong>Message:</strong><br>{$message}</p>
  ";
  $mail->AltBody = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";
  $mail->send();
  echo "OK";die;

} catch (Exception $e) {
  //echo "<pre>";print_r($e);die;
  http_response_code(500);
  echo "Mailer Error: {$mail->ErrorInfo}";
}
