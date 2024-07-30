<?php
class MyException extends Exception {
    public function __toString() {
        return "Custom Exception Classes";
    }
}
		
?>