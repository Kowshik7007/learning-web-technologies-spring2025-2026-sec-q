<?php
    $username = "";
    if(isset($_REQUEST['submit'])){
        $username = $_REQUEST['username'];
    }
?>

      <h3>Your profile name is: 
        <?php 
            if($username == ""){
                echo "not found!";
            } else {
                echo $username;
            } 
        ?> 
    </h3>