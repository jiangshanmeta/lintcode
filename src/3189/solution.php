<?php
require "Father.php";
// write your code here 
class Son extends Father{
	function send_message(){
		return "Son method.";
	}
}
?>