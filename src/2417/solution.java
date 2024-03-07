public class Solution {
    /**
     * @param str: Arbitrary length string
     * @return How many numbers are in the string
     */
    public int statistics(String str) {
        int result = 0;
        for (int i = 0; i < str.length(); i++) {
            if (Character.isDigit(str.charAt(i))) {
                result++;
            }
        }
        return result;
    }
}
