<?php
    // Initialize variables
    $dd = "";
    $mm = "";
    $yyyy = "";

    if(isset($_REQUEST['submit'])){
        $dd = $_REQUEST['dd'];
        $mm = $_REQUEST['mm'];
        $yyyy = $_REQUEST['yyyy'];
    }
?>



    <h3>Your Date of Birth is: 
        <?php 
            if($dd == "" || $mm == "" || $yyyy == ""){
                echo "not found!";
            } else {
                echo $dd . "/" . $mm . "/" . $yyyy;
            } 
        ?> 
    </h3>
