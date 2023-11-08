<?php
class Solution{
	function judge_nums($num1, $num2){
		if($num1>$num2){
			return 1;
		}else if($num1<$num2){
			return -1;
		}
		return 0;
	}
}
?>