<?php
class Solution{
	function grading($score){
		switch ($score){
			case $score>=90 && $score<=100:
				return "A";
				break;
			case $score>=80 && $score<=89:
				return "B";
				break;
			case $score>=70 && $score<=79:
				return "C";
				break;
			case $score>=60 && $score<=69:
				return "D";
				break;
			case $score<60:
				return "E";
				break;
		}

	}
}
?>