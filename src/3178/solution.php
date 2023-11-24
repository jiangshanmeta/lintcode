<?php
class Solution{
	function exchange_digital(&$num1, &$num2){
		$tmp = $num1;
		$num1 = $num2;
		$num2 = $tmp;
	}
}
?>