import java.util.HashSet;
import java.util.Set;

public class Solution {
    /**
     * @param str: String of arbitrary letters
     * @return De-duplication guarantees the insertion of sequential strings
     */
    public String handle(String str) {
        Set<Character> set = new HashSet<>();
        StringBuilder stringBuilder = new StringBuilder();
        char[] chars = str.toCharArray();
        for (char c : chars) {
            if (set.contains(c)) {
                continue;
            }
            stringBuilder.append(c);
            set.add(c);
        }
        return stringBuilder.toString();
    }
}
