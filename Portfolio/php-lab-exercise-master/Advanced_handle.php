<!--Derek Malikian
    July 3, 2017
    CSC Web Programming
    PHP Lab Exercise
    Advanced_handle.php
-->

<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "utf-8">
        <title>Advanced Handle Form</title>
        <link rel = "stylesheet" type = "text/css" href = "stylesheet.css">
    </head>
    
    <body>
        
        <div class = "bodyOne">
        <h1 class = "headingOne">Web Design Lab Exercise PHP</h1>
        
        
        <div class = "bodyTwo">
        <p>
            Hello, <?php echo $_POST["title"] . ". " . $_POST["first_name"] . " " . $_POST["last_name"] . " of " . $_POST["address"] . "."; ?>
        </p>
        
        <p>
            <?php $DOB = $_POST["DOB"]; 
              $thisyear = date("Y");
              $age = $thisyear - $DOB;
            
              echo $_POST["title"] . ". " . $_POST["last_name"] . " you will be " . $age . " years old this year."; ?>
        </p>
        
        </div>
            
        <footer>
            <p>Created by: Derek Malikian
            <p>CSC 4370 Web Programming</p>
        </footer>
            
        </div>
    </body>
</html>    