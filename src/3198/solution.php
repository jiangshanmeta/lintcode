<?php
class Solution{
    function build_class($name){
      if(class_exists($name)){
        new $name;
      }else{
        echo "Class '$name' not found";
      }
		
    }
}
?>