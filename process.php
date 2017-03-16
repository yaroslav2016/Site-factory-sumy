<?php
$name= $_POST["name"];
$email= $_POST["email"];
$message= $_POST["message"];
 
$EmailTo= "yaroslavrokhmanov@gmail.com";
$Subject= "Получено новое сообщение";
 
// Подготовка шапки сообщения
$Body.= "Имя: ";
$Body.= $name;
$Body.= "\n";
 
$Body.= "Email: ";
$Body.= $email;
$Body.= "\n";
 
$Body.= "Сообщение: ";
$Body.= $message;
$Body.= "\n";
 
// посылаем сообщение
$success= mail($EmailTo, $Subject, $Body, "From:".$email);
 
// редирект
if($success){
   echo"success";
}else{
    echo"invalid";
}
 
?>