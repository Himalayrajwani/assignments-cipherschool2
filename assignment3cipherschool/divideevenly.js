
        <script>
             var a=prompt("enter the first no");
             var b=prompt("enter the second no");
       
            function dividesEvenly(a,b){

                if (a>b) {
                        if(a%b==0){
                            document.write(a/b);
                            return true;
                        
                        }
                        
                        else{
                            document.write(a/b);
                            return false;
                        }
                        }
                else{
                    document.getElementById("demo").innerHTML="the value of first no must be greater than b";

                }
            
                var value1=dividesEvenly(a,b);
            }
                </script>
                
       
       
        
