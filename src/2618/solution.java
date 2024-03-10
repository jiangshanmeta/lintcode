import java.util.*;

public class Solution {
    public boolean characterConversion(String str, int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != (int) str.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}