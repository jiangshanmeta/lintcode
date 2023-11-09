<?php
class Solution{
	function determining_leap_years($year){
		if(($year%4==0 && $year%100!=0) || $year%400==0){
			return "is a leap year";
		}
		return "not a leap year";
	}
}
?>