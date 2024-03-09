interface HandleAble {
    /**
     * @param num : String type numbers
     * @return return means that the number to be returned is an int type
     * 
     */
    int handle(String num);
}

public class Solution implements HandleAble {
    /**
     * @param str : String type numbers
     * @return A rounded number
     */
    public int get(String str) {
        return handle(str);
    }

    @Override
    public int handle(String num) {
        return (int) Double.parseDouble(num);
    }
}