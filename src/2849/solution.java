public class Solution {

    public int[] invertedArray(int n, int k) throws Exception {
        if (k > n) {
            throw new Exception("The length of parameter k is not legal.");
        }
        int[] arr = new int[n];
        int index = 0;
        while (k > 0) {
            arr[index++] = k--;
        }
        return arr;
    }
}