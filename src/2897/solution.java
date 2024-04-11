import java.util.*;
import java.util.stream.IntStream;

public class Solution {
    public boolean isOutByQueue(int[] nums) {
        int[] seq = IntStream.rangeClosed(1, nums.length).toArray();
        Queue<Integer> queue = new ArrayDeque<>();
        int index = 0;
        for (int i = 0; i < nums.length; i++) {
            if (queue.size() > 0 && nums[i] == (int) queue.peek()) {
                queue.remove();
            } else {
                boolean found = false;
                while (index < seq.length) {
                    if (seq[index] == nums[i]) {
                        found = true;
                        index++;
                        break;
                    }
                    queue.add(seq[index++]);
                }
                if (!found) {
                    return false;
                }
            }

        }
        return queue.size() == 0;

    }

}