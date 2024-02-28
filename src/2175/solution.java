public class Solution {
    public int[] rounding(int[] array) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] <= 0) {
                continue;
            }
            int mod = array[i] % 10;
            if (mod < 5) {
                array[i] -= mod;
            } else {
                array[i] += (10 - mod);
            }

        }
        return array;
    }
}
