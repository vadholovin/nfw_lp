<?php

// email address
$to = "spheric.zoo@gmail.com"; //получатель spheric.zoo@gmail.com vadim@crazy.studio
$email = "your.course@landing.xyz"; //отправитель
$subject = $_POST['subject'];
$name = $_POST['name'];

$message = "Имя: {$_POST['name']}<br>\r\n";
$message .= "Email: {$_POST['email']}<br>\r\n";
$message .= "Сообщение: {$_POST['message']}<br>\r\n";
  
$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
$headers .= "From: your.course@landing.xyz\r\n";
$headers .= "X-Priority: 1\r\n";


$sentMail = mail($to, $subject, $message, $headers);
if($sentMail) //output success or failure messages
{ 
  echo 'done';
}else{
  echo 'error';
}
