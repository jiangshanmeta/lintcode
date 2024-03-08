import java.util.ArrayList;

public class Solution {
    /**
     * @param list: Represents the incoming set
     */
    public void sortPrint(ArrayList<Integer> list) {
        list.sort((a, b) -> b - a);
        for (int n : list) {
            System.out.println(n);
        }

    }
}