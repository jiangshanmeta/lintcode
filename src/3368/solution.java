import java.util.*;

public class Solution {

    public void sortByLength(String[] strArr) {

        Arrays.sort(strArr,(a,b)->a.length()-b.length());
        for(String s : strArr){
            System.out.println(s);
        }

    }

}