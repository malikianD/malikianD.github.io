/***************************************************************************************************************************
 javascript for the payroll
 **************************************************************************************************************************/
var myVar = setInterval(myTimer, 1000);
            function myTimer() {
                var d = new Date();
                document.getElementById("time").innerHTML = d.toLocaleTimeString();
            }
            
            var count = 1;
            function createRow(){
                
                var hr = document.getElementById("hours").value;
                
                if (hr == -1){
                    document.write("Test");
                }
                             
                else{
                var node = document.createElement('tr'); //create a <tr>
                var td1 = node.appendChild(document.createElement('td'));
                var td2 = node.appendChild(document.createElement('td'));
                var td3 = node.appendChild(document.createElement('td'));
                
                var index = document.createTextNode(count++);
                td1.appendChild(index);
                
                var hr2 = document.createTextNode(hr);
                td2.appendChild(hr2);
                
                var hr3 = document.createTextNode(calculatePay());
                td3.appendChild(hr3);
                
                document.getElementById("payTable").appendChild(node);
                
                var sum2 = calculateTotal();
                document.getElementById("total").innerHTML = sum2;
                }
            }
            
            
            // This function takes the hours as input and computes the total pay
            // if the hours are over 40 it calculates the overtime
            function calculatePay() {
                var x;
                var y = 15.00;
                var total = 0.00;
                var overtime_hours = 0;
                
                x = document.getElementById("hours").value;
                
                
                if (x > 40)
                    {
                        
                        overtime_hours = x - 40;   
                        y = 22.50;
                        total = (overtime_hours * y) + 600;
                        
                    }
                else {
                        total = x * y;
                        
                    
                }
                
              
                             return total
            }
            
            var sum = 0;
            
            function calculateTotal()
            {
                 sum = sum + calculatePay();
                 
                 return sum
                
            }

/***************************************************************************************************************************
 javascript for the guessing game
 **************************************************************************************************************************/

var my_music;
            
            function start_sound()
            {
                var my_music = new Audio('Beautiful_Light.mp3');
                my_music.play();
               
            }
            
            start_sound();
        
            
            function count_timer() {
                    var seconds = 0;
	               timer = setInterval(function() {
	               seconds ++;
	               document.getElementById("seconds").innerText = seconds % 60;
                    document.getElementById("minutes").innerText = parseInt(seconds / 60);
                    }, 1000);
            }
            

            /*var myVar = setInterval(myTimer, 1000);
            
            function myTimer() {
                var d = new Date();
                document.getElementById("time").innerHTML = d.toLocaleTimeString();
            }*/
            
            
            
            var random_number = Math.floor(Math.random() * 100) + 1; // the random number generated at the beginning of each game
               
            var number_guesses_left = 20; // the maximum number of guesses allowed for each game
            
            var number_of_guesses = 0; // the number of guesses 
            
            function check_guess() {
                             
                count_timer();
                
                var guess_from_user = document.getElementById("number_guessed").value; // this grabs the input from the user and stores it in the variable guess_from_user
                
                var output; // the result 
                
                number_guesses_left--;
                
                number_of_guesses++;
                
                  
                if (isNaN(guess_from_user) || guess_from_user < 1 || guess_from_user > 100)
                    {                 
                        output = "Please enter a valid number";
                    }    
                           
                if (guess_from_user > random_number && guess_from_user > 0 && guess_from_user < 101)
                    {              
                        output = "You guessed to high, you have " + number_guesses_left + " left.";
                        
                    }
                
                if (guess_from_user < random_number && guess_from_user > 0 && guess_from_user < 101)
                    {                   
                        output = "You guessed to low, you have " + number_guesses_left + " left";
                    }
                
                if (guess_from_user == random_number) // if the user guesses correctly an alert box will appear
                    {
                        alert_box("Congratulations you guessed the number " + random_number + " correctly, it only took you " + number_of_guesses + " time(s), would you like to play again?");
                    }
                
                if (number_guesses_left == 0) // if the user does not guess within the amount of tries they lose
                    {
                        alert_box("You lose, the secret number was " + random_number + ", would you like to play again?");
                    }
               
               
                document.getElementById("the_output").innerHTML = output;   // this displays the output based on what the user inputs regarding the loop above          
            }
               
                
            // a function to restart the page 
           function restart_game(){
               document.location.reload();
           }
            
            // a function for the alert box
            // enter a string message of your choice
            function alert_box(string)
            {
                if (confirm(string) == true)
                    {
                        restart_game();
                    }
            }

/***************************************************************************************************************************
 javascript for the memory card game
 **************************************************************************************************************************/

var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

   /* var memory_array = [];
    
    var x = document.getElementById("eight_board");
    var y = document.getElementById("ten_board");
    var z = document.getElementById("twelve_board");
    
    function board_size(value)
    {
        if (value == x)
            {
                memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
            }
        
        if (value == y)
            {
                memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I'];
            }
        
        if (value == z)
            {
                memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
            }
    }
        /*document.getElementById("eight_board") = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
            
        document.getElementById("ten_board") = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I'];
            
        document.getElementById("twelve_board") = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
          */  
            
    
      

   
    
//board_size(x); 
/*var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}*/
    
function newBoard(){
	tiles_flipped = 0;
    
    //board_size();
    
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
    
    // try to flip all the tiles 
    /*function flip_all_tiles()
    {
        for (var i = 0; < memory_array.length: i++)
            {
                
            }
    }*/
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(card_back_two.png)';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(card_back_two.png)';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 1000);
			}
		}
	}
}