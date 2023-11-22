<?php
class Solution{
	function sub_string($str){
		// write your code here       
		for($i=1; $i<=strlen($str); $i++){
			$rts .= substr($str , -$i , 1);
		}
		$arr1 = str_split($str);
		$arr2 = str_split($rts);
		$l = strlen($str);
		for($i=0; $i<$l; $i++){
			if($arr1[$i] != $arr2[$i]){
				$res .= $arr1[$i];
			}
			else{
				if($arr1[$i-1] != $arr2[$i-1] && $arr1[$i+1] != $arr2[$i+1]){
					$res .= $arr1[$i];
				}
			}
		}
		return $res;
	}
}
?>