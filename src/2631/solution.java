import java.util.*;

public class Solution {
    public int[] arrayConversion(String str1) {
        String[] strings = str1.substring(1, str1.length() - 1).split(", ");
        int[] result = new int[strings.length];
        for (int i = 0; i < result.length; i++) {
            result[i] = Integer.valueOf(strings[i]);
        }
        return result;
    }
}