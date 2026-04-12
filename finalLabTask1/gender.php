<?php
    $gender = "";
    if(isset($_REQUEST['submit'])){
        
        if(isset($_REQUEST['gender'])){
            $gender = $_REQUEST['gender'];
        }
    }
?>

    <h3>Your selected gender is: 
        <?php 
            if($gender == ""){
                echo "not found!";
            } else {
                echo $gender;
            } 
        ?> 
    </h3>