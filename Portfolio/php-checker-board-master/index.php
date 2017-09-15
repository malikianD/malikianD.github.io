<!-- Derek Malikian
     Assignment Three
     Web Programming 4370
     July 1, 2017
     HTML
-->     

<!-- This program implements the use of php scripts and the use of the nested for loop 
     to create a checkerboard table.
-->

<!DOCTYPE html>

<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <title>First PHP Project</title> <!-- Title Tab -->
        <link rel = "stylesheet" type = "text/css" href = "stylesheet.css"> <!-- Link to CSS file -->
                                        
    </head>
    <body>
        
        <div class = "bodyGrey">
            
            <h1 class = "heading01">Checker Board</h1>
       
            
        <table>
                <!-- The php script will be embedded within the table -->  
            
        <?php
            for ($row = 1; $row <= 10; $row++) // this creates 10 rows for the outer loop
            {
                echo '<tr>';
                
                for ($col = 1; $col <= 10; $col++) // for each row the program prints 10 columns in the inner loop
                {
                    $total = $row + $col;
                    
                    if ($total % 2 == 0) // if the total is even then the background will be red
                    {
                        echo '<td class = "red"></td>';
                    }
                    else                 // if the total is odd then the background will be black
                    {
                        echo '<td class = "black"></td>';
                    }
                }
                
                echo '</tr>';
            }
        
        ?>
        </table>
        
        
        <div>
            <h2>Problem one using PHP</h2>
                <p class = "one">Please create a PHP program that will incorporate two for loops which are nested.  This program should populate a "Checker board" using alternating color values that are red and black.  The checker board width should be 300px.  Each of the cell's height and width should be 35px.  The border set to 1px, cell padding 1px, and cell spacing 1px.</p>
        </div>
        
        <div>
            <h3>The PHP for loop</h3>
                <p class = "one">PHP for loops execute a block of code a specified number of times.  The for loop is used when you know in advance how many times the script should run. </p>
        </div>
        
        <div>
            <h3>Nested Loops</h3>
                <p class = "one">To help us construct our checker board, we will be using what is referred to as nested loops.  When the body of a loop contains another loop, the loops are nested.  A typical use of nested loops is printing a table with rows and columns.  When processing tables, nested loops occur naturally.  An outer loop iterates over all rows of the table, and the inner loop deals with the columns in the current row.</p>
        </div>
        
            
            
        <div>
            <p class = "one">To assist us in developing our table we can use the following code snippet for this checker board  below.</p>
        </div>
            
        <div class = "codeBack">
            <img src = "code_01.png" alt = "PHP table code snippet">
        </div>
            
        <footer>
            <p>Created by: Derek Malikian <br>
                Web Development, CSC 4370</p>
        </footer>
            
        </div>
    </body>
</html>
