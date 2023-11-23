<?php
class Solution{
	function judge_number($arr, $num){
		if(in_array($num,$arr)){
			return "The number are in an arrays.";
		}else{
			return "The number do not exist in arrays.";
		}
	}
}
?>