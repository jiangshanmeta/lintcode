public class Solution {
    public static String replaceString (String str, String replacement) {
        return str.replaceAll("[\\/\\|\\~\\!@#$%\\^&\\*\\(\\);:_\\+\\-\\[\\]]+"," ");
        
    }
}