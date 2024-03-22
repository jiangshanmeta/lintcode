public class NoAgesException extends Exception {
    public NoAgesException() {
        super("Age Error!");
    }
}

public class Solution {

    public boolean checkAge(int num) throws Exception {
        if (num < 0 || num > 99) {
            throw new NoAgesException();
        }
        return true;

    }
}