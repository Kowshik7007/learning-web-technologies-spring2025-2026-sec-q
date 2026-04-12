<?php
    $selected_degrees = []; 

    if(isset($_REQUEST['submit'])){
        
        if(isset($_POST['degrees'])){
            $selected_degrees = $_POST['degrees'];
        }
    }
?>



    <h3>Your selected degree is: 
        <?php 
            if(empty($selected_degrees)){
                echo "not found!";
            } else {
                
                echo implode(", ", $selected_degrees);
            } 
        ?> 
    </h3>

   