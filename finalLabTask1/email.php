<?php
    $email = "";
    if(isset($_REQUEST['submit'])){
        $email = $_REQUEST['user_email'];
    }
?>

    <h3>Your profile email is: 
        <?php 
            if($email == ""){
                echo "not found!";
            } else {
                echo $email;
            } 
        ?> 
    </h3>