import java.util.*;
import java.util.stream.Collectors;

public class Solution {

    public int[] mergeArray(int arr1[], int arr2[]) {
        Set<Integer> set = new HashSet<>();
        for (int a : arr1) {
            set.add(a);
        }
        for (int a : arr2) {
            set.add(a);
        }

        List<Integer> list = set.stream().sorted().collect(Collectors.toList());
        int[] result = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            result[i] = list.get(i);
        }
        return result;
    }
}