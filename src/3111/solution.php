<?php
class Solution{
	function alphabet_conversion($str){      
		$arr = str_split($str);
		foreach($arr as &$value){
			if (strtoupper($value) === $value) {
				$value = strtolower($value);
			} else {
				$value = strtoupper($value);
			}
		}
		$res = implode('', $arr);
		return $res;
	}
}
?>