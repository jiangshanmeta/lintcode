import java.util.*;

public class Solution {

    public List<String> sortName(List<String> list) {
        Collections.sort(list, (a, b) -> a.compareToIgnoreCase(b));
        return list;
    }
}