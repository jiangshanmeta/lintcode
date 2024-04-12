import java.util.*;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ArrayList;

class Solution {

    public static LinkedList<String> Weighting(LinkedList<String> list) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        Set<String> set = new HashSet<>();
        int index = 0;
        for (String s : list) {
            if (set.contains(s)) {
                arrayList.add(index);
            } else {
                set.add(s);
            }
            index++;
        }
        for (int i = arrayList.size() - 1; i > -1; i--) {
            list.remove((int) arrayList.get(i));
        }

        return list;
    }

}
