<?php
class Solution{

	public function say(){}
	
	public function send(){}
	
	// write your code here
	public function __call($method,$arguments){
		echo   'The call method does not exist';
	}
	
}
?>