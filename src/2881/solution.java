import java.util.*;

public class Solution {

    public List<Integer> largestNumber(List<Integer> list) {
        int max = Integer.MIN_VALUE;
        List<Integer> result = new ArrayList<>();
        for(int item:list){
            if(item>max){
                result.add(item);
                max = Math.max(max,item);
            }
        }
        return result;
    }
}