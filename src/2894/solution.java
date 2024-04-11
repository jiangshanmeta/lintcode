import java.util.*;

public class Solution {

    public Map<Integer, List<Integer>> orderByFrequency(int[] nums) {
        Map<Integer, Integer> map1 = new HashMap<>();
        for (int num : nums) {
            map1.put(num, map1.containsKey(num) ? map1.get(num) + 1 : 1);
        }

        Map<Integer, List<Integer>> map2 = new TreeMap<>((a, b) -> b.compareTo(a));
        for (Map.Entry<Integer, Integer> entry : map1.entrySet()) {
            if (!map2.containsKey(entry.getValue())) {
                map2.put(entry.getValue(), new ArrayList<>());
            }
            map2.get(entry.getValue()).add(entry.getKey());
        }

        for (List<Integer> list : map2.values()) {
            Collections.sort(list);
        }

        return map2;
    }

}