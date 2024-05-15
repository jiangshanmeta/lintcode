<?php
class Solution{
	public $url = 'https://www.lintcode.com/';
	public $name = 'LintCode';

	public function __unset($attr){
		echo 'Failed to delete attribute '.$attr;
	}
}
?>