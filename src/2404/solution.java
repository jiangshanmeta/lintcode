import java.util.Arrays;
import java.util.stream.Collectors;

public class Solution {
    /**
     * @param arr: Any int array, and not an empty array
     * @return Non-repetitive and ordered arrays
     */
    public Integer[] deDuplicationAndSort(Integer[] arr) {
        return Arrays.stream(arr).distinct().sorted().collect(Collectors.toList()).toArray(new Integer[0]);
    }
}
