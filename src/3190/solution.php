<?php
class Student{
	public $name, $age, $sex, $number;
	
	public function __construct($name, $age, $sex, $number){
		$this -> name  = $name;
		$this -> age   = $age;
		$this -> sex = $sex;
		$this -> number = $number;
	}
	
	public function fun(){
        return "name:" . $this->name . ", age:" . $this->age . ", sex:" . $this->sex . ", number:" . $this->number;
    }
	
}
?>