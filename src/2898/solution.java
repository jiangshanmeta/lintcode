import java.util.*;
import java.util.stream.IntStream;

public class Solution {
    public boolean isOutByStack(int[] nums) {

        if (nums.length < 3) {
            return true;
        }
        int[] seq = IntStream.rangeClosed(1, nums.length).toArray();
        Deque<Integer> stack = new ArrayDeque<>();
        int index = 0;
        for (int i = 0; i < nums.length; i++) {
            if (stack.size() > 0 && (int) stack.peekLast() == nums[i]) {
                stack.removeLast();
            } else {
                boolean found = false;
                while (index < seq.length) {
                    if (seq[index] == nums[i]) {
                        index++;
                        found = true;
                        break;
                    }
                    stack.addLast(seq[index++]);

                }
                if (!found) {
                    return false;
                }
            }
        }

        return stack.size() == 0;
    }

}