<?php
class Solution{
	function time_calculation($year, $month, $day){
		$year2=strval($year+10).'-'.strval($month).'-'.strval($day);
		$year1=strval($year).'-'.strval($month).'-'.strval($day);
		return strtotime($year2)-strtotime($year1);
		
	}
}
?>