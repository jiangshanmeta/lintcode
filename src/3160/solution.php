<?php
class Solution{
	function middle_number($arr){
		$count = count($arr);
		$key = $count / 2;
		if($count % 2 == 0){
			return ($arr[$key] + $arr[$key -1]);
		}else{
			return $arr[$key];
		}

	}
}
?>