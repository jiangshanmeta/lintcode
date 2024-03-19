import java.util.regex.Pattern;
public class Solution {
    public static boolean isMatch(String s) {
        return Pattern.matches("1[3-9]\\d{9}",s);
        
    }
}