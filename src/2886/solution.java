import java.util.*;

public class Solution {
    public static Map<String, Integer> sortMap(Map<String, Integer> map) {
        TreeMap<String, Integer> treeMap = new TreeMap<>((a, b) -> a.compareTo(b));
        treeMap.putAll(map);
        return treeMap;

    }

}