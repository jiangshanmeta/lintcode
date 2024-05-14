<?php
class Solution{
	function assignment($name, $age){
		$student = new Student;
		$student->name = $name;
		$student->age = $age;
		return $student;
		
	}
}
?>