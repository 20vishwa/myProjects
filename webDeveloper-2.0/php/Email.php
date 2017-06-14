<?php
    $mailTo="vishwateja157@gmail.com";

    $subject="Sending mail through php code";

    $body="So this is the body part of the maiuk";

    $headers="From: svamshi04@gmail.com";

    if(mail($mailTo, $subject, $body, $headers)){
        echo "email has been sent successfully";
    }
    else{
        echo "email could not be sent";
    }
?>
