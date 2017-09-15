   // This is the jquery implementation to show and hide the payment type 
        
            $(document).ready(function() {
                $("#CC").click(function() {
                    $("#test2").show();
                    $("#test3").hide();
                    
                });
            });
            
            $(document).ready(function() {
                $("#WT").click(function() {
                    $("#test3").show();
                    $("#test2").hide();
                });
            });
              
    // implementation of the drag and drop

            function allowDrop(ev) {
                ev.preventDefault();
            }
            
            function drag(ev) {
                ev.dataTransfer.setData("text", ev.target.id);
            }
            
            
            
            function drop(ev) {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                //ev.target.appendChild(document.getElementById(data));
                document.getElementById(data).style.display = 'none';
            }
      
        
        // This is the javascript to check that the information is valid for the credit card information

            function validate() {
                
                
                var cc = document.getElementById("CC1").value;
                
                var mon = document.getElementById("month").value;
                
                var secure_num = document.getElementById("security_number").value;
                
                
                if (isNaN(cc) || isNaN(mon) || isNaN(secure_num))
                    {
                        alert("Please enter a numeric input");
                    }
                
                if (cc.length == 0 || mon.length == 0 || secure_num.length == 0)
                    {
                        alert("Please fill in the empty fields");
                    }
                else {
                    alert("Thank you for your purchase");
                }
            }
      
        
        //<!-- This is the ajax implementation to grab the information -->
        
            
            function loadDoc() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("demo55").innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", "index02.html", true);
                xhttp.send();
                
            }
        