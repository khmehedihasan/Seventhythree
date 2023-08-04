<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST['send'])){
    $comapany = htmlentities($_POST['company']);
    $email = htmlentities($_POST['email']);
    $invest = htmlentities($_POST['invest']);
    $message = htmlentities($_POST['message']);

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'YOUR_EMAIL';
    $mail->Password = 'YOUR_GOOGLE_APP_PASSWORD';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('YOUR_EMAIL');
    $mail->Subject = ("$email ($invest)");
    $mail->Body = $message;
    $mail->send();

    header("Location: ./response.html");
}
?>