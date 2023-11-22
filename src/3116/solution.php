<?php
class Solution{
	function defang_IP_addr($address){
		return str_replace(".","[.]", $address);
	}
}
?>