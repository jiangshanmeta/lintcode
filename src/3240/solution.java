import java.util.*;

public class Solution {

    /**
     * Keys in Map:
     * Letters
     * Spaces
     * Numbers
     * Others
     */
    public Map<String, Integer> getLettersCounts(String s) {

        int nums = 0;
        int letters = 0;
        int spaces = 0;
        int others = 0;

        Map<String, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (Character.isLetter(c)) {
                letters++;
            } else if (Character.isDigit(c)) {
                nums++;
            } else if (Character.isSpaceChar(c)) {
                spaces++;
            } else {
                others++;
            }
        }

        if (nums > 0) {
            map.put("Numbers", nums);
        }
        if (letters > 0) {
            map.put("Letters", letters);
        }
        if (spaces > 0) {
            map.put("Spaces", spaces);
        }
        if (others > 0) {
            map.put("Others", others);
        }

        return map;
    }

}