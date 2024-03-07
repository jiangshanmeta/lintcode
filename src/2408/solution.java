import java.util.Arrays;

public class Solution {
    /**
     * @param str: Arbitrary non-empty string
     * @return String in alphabetical ascending order
     */
    public String handle(String str) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}
