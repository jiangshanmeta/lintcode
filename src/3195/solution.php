<?php
class Solution {
	function judge_class($object){
		if($object instanceof A) {
			return "This object is A";
		}
		if($object instanceof B){
			return "This object is B";
		}
		if($object instanceof C){
			return "This object is C";
		}
	}
}
?>