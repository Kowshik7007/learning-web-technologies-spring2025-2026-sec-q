<?php
    $blood_group = "";

    if(isset($_REQUEST['submit'])){
        $blood_group = $_REQUEST['blood_group'];
    }
?>



    <h3>Your Blood Group is: 
        <?php 
            if($blood_group == ""){
                echo "not found!";
            } else {
                echo $blood_group;
            } 
        ?> 
    </h3>