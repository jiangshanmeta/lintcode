import java.util.*;

public class Solution {

    public int getSum(int arr[]) {
        HashSet<Integer> set = new HashSet<>();
        int result = 0;
        for (int i : arr) {
            if (set.contains(i)) {
                continue;
            }
            set.add(i);
            result += i;
        }
        return result;
    }
}