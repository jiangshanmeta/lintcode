<?php
class Solution{
	function word_count($arr){
		$arr = array_count_values($arr);
 		arsort($arr);
		$more_value = key($arr);
		return $more_value;
	}
}
?>