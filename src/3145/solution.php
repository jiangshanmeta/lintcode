<?php
class Solution{
	function create_array(){
		return [
			'int'=>1,
			'float'=>1.24,
			'boolean'=>false,
			'str'=>'this is string',
			'array'=>[
				'this is a array, and value is string.'
			],
			'json'=>json_encode(['this_is_json'=>'josn data']), 
			'null'=>null
		];
	}
}
?>