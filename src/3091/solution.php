<?php
class Solution{
	function convention_numbers($m, $n){
		if($n==0){
			return $m;
		}else{       
			while($m%$n!=0){
				$r=$m%$n;
				$m=$n;
				$n=$r;
			}
			return $n;
		}
	}
}
?>