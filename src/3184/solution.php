<?php
class Solution{
	function date_change($date){
		return date("Y年n月j日", strtotime($date));
	}
}
?>