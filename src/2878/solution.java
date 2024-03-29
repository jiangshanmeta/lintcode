import java.util.*;

public class Solution {

    public List<Integer> removeNumber(List<Integer> list) {
        List<Integer> res = new ArrayList<>();
        for(int item:list){
            if(item%3 == 0){
                continue;
            }
            if(check(item)){
                res.add(item);
            }

            
        }
        return res;
    }
    
    public boolean check(int n){
        while(n != 0){
            if(n%10 == 3){
                return false;
            }
            n /= 10;
        }
        return true;
    }
}
