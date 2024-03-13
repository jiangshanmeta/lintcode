class MyException extends Exception {
    public MyException() {
        super("The number you entered is not legal");
    }
}

public class Solution {
    /**
     * @param num: The legal numbers passed in are required to be between 0 and 100,
     *             including 0 and 100
     * @throws MyException: Throwing our custom exception
     */
    public void validate(int num) throws MyException {
        if (num >= 0 && num <= 100) {
            System.out.println(num);
        } else {
            throw new MyException();
        }
    }
}
