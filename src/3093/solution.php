<?php
while(true){
   $x+=1;

   if(($x % 3 == 2) && ($x % 5 == 3) && ($x % 7 == 4)){
       echo $x;
       break 1; 
   }
}
?>