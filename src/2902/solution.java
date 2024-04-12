import java.util.*;

public class Solution {
    public void priority(List<Person> list) {
        PriorityQueue<Person> pq = new PriorityQueue<>((a,b)->{
            boolean a_pri = a.age<5 || a.age>60;
            boolean b_pri = b.age<5 || b.age>60;
            
            if(a_pri && b_pri){
                return a.number-b.number;
            }
            
            if(a_pri){
                return -1;
            }
            if(b_pri){
                return 1;
            }
            
            
            return a.number-b.number;
        });
        pq.addAll(list);
        while(!pq.isEmpty()){
            System.out.println(pq.poll());
        }
        
    }

}