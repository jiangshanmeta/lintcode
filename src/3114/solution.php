<?php
class Solution{
	function find_index($str, $word){
		if(strstr($str,$word)){
			return "Word search success.";
		}else{
			return "Word search failure.";
		}

	}
}
?>