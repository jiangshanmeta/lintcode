import java.util.ArrayList;

class Solution {
    public static void watch(ArrayList<Integer> list){
        ArrayList<Integer> result = new ArrayList<>();
        for(int item:list){
            if(item%2 == 0){
                result.add(item);
            }
        }
        System.out.println(result);
    }

}
