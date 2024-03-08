import java.util.*;

public class Solution {
    /**
     * @param nums: Represents the incoming number
     * @return: A int value representing whether the
     *          return is a palindrome or not
     */
    public int uniqueNumber(int nums[]) {
        int xor = 0;
        for(int n:nums){
            xor ^= n;
        }
        return xor;
    }
}