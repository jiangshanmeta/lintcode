import java.util.*;

public class Solution {
    public int[] replacement(int[] arr1, int[] arr2) {
        int i = arr1.length-1;
        int j = arr2.length-1;
        while(j>-1){
            arr1[i--] = arr2[j--];
        }
		return arr1;
    }
}