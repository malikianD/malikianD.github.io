<!--Derek Malikian
    July 3, 2017
    CSC Web Programming
    PHP Lab Exercise
    Advanced.php
-->

<!DOCTYPE html>
<html lang = "en">
    
    <head>
        <meta charset = "utf-8">
        <title>Advanced Form</title>
        <link rel = "stylesheet" type = "text/css" href = "stylesheet.css">     
    </head>
    
    <body>
        
        <div class = "bodyOne">
            
        <h1 class = "headingOne">Web Design Lab Exercise PHP</h1>
        
            <div class = "bodyThree">
                <p>This exercise deals with the basic forms handling in (X)HTML and PHP.  You will gain practice in using the POST method to send user input to the server, and the print function to display dynamic content to the end user. <br>
                    Through out the course we will be following the content of Larry Ullman's PHP for the Web very closely, and in several exercises you will be using examples from the book as the basis for your web pages and scripts.  The online PHP manual is the definitive reference source. <br>
                    Exercise:  The form should ask for title, first name, last name, address, and the year of birth.             
                </p>
            </div>
                
        <div class = "bodyTwo">
                           
        <form  action = "Advanced_handle.php" method = "POST">
            
            <p>Title:<br>
                
                <select name = "title">
                    <option value = "Mr">Mr.</option>
                    <option value = "Mrs">Mrs.</option>
                    <option value = "Ms">Ms.</option>
                    <option value = "Dr">Dr.</option>
                    <option value = "Prof">Prof.</option>
                </select>
                
            <p>
                First name: <br>
                <input type = "text" name = "first_name">
            </p>
            
            <p>
                Family name: <br>
                <input type = "text" name = "last_name">
            </p>
            
            <p>
                Address: <br><textarea name = "address" cols = "20" rows = "4"></textarea>
            </p>
            
            <p>
                What year were you born: <br>
                <input type = "text" name = "DOB" size = "4">
            </p>
        
            <input type = "submit" name = "submit" value = "Submit">
            <input type = "reset" name = "reset" value = "Reset">
                   
        </form>
            
            </div>
            
            <footer>
                <p>Created by: Derek Malikian
                <p>CSC 4370 Web Programming</p>
            </footer>
            
        </div>
              
    </body>
</html>    