import java.util.regex.Pattern;

public class Solution {
    public static boolean isMatch(String s) {
        return Pattern.matches("[a-zA-Z_]{1}[0-9a-zA-Z\\.]*@([0-9a-zA-Z]+\\.)+(com)+(\\.[\\.a-zA-Z0-9]+)*",s);
        
    }
}