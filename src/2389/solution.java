import java.util.Arrays;
import java.util.stream.Collectors;

public class Solution {
    /**
     * @param arr: Any Integer array, and not an empty array
     * @return Unduplicated arrays
     */
    public Integer[] deDuplicate(Integer[] arr) {
        return Arrays.stream(arr).distinct().sorted().collect(Collectors.toList()).toArray(new Integer[0]);
    }
}
