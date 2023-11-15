<?php
class Solution{
	function summation($num){
		$result = 0;
		for($i=0;$i<=$num;$i++){
			if($i%7 != 0){
				$result += $i;
			}
		}

		return $result;
	}
}
?>