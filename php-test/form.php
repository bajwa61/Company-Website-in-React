<?php
if(isset($_POST['submit'])){
    $mail=$_POST['mail'];
    $subject="Greetings";
    $headers="From:$mail";
    $mailto="zain@newstate.io";
    $txt="thanks for subscriptions";
    mail($mailto,$subject,$headers,$txt);
    header("location:index.php?mailsend");
}


?>