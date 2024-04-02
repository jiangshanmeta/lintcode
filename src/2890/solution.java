import java.util.Arrays;
import java.util.List;

public class Solution {
    // write your code here

    public List<String> sort(String letter) {
        String[] strings = letter.split("");

        Arrays.sort(strings, (a, b) -> a.compareToIgnoreCase(b));

        return Arrays.asList(strings);
    }

}