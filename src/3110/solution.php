<?php
class Solution{
	function string_splice($m, $n){
		$str = $m.$n;
		$len = strlen($str);
		return $len.":".$str;     
	}
}
?>