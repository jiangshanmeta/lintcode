public class Solution {
    /**
    *
    * @param array: array represents an array
    * @return : represents the maximum value of the array to be returned
    */
    public int getMax(int[] array) {
        int result = array[0];
        for (int i=1;i<array.length;i++){
            result = Math.max(result, array[i]);
        }
        return result;
    }
}