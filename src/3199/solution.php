<?php
    function error_handler1($errno, $errstr) {
        echo "error number：".$errno."\n";
        echo "error msg：".$errstr;
        die();
    }
    set_error_handler("error_handler1");
		
?>