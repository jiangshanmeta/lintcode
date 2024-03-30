import java.util.*;

public class Solution {
    public static void printMap(Map<String, String> map) {
        Set<String> keys = map.keySet();
        List<String> list = new ArrayList<>(keys);
        System.out.print('{');
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i) + " : ");
            System.out.print(map.get(list.get((i))));
            if (i != list.size() - 1) {
                System.out.print(", ");
            }

        }

        System.out.println('}');

    }

}