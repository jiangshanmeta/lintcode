<?php
class Solution{
	function get_days($m, $n){
		if($n == 2){
			if( ($m%4 == 0 && $m%100 != 0) || $m%400 == 0){
				return '29 days';
			}
			return '28 days';
		}
		$arr = [
			'31',
			'28',
			'31',
			'30',
			'31',
			'30',
			'31',
			'31',
			'30',
			'31',
			'30',
			'31'
		];

		return $arr[$n-1]." days";
	}
}
?>