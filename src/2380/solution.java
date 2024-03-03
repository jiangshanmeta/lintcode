import java.util.ArrayList;


public class Solution {
    /**
     * @param str1: represents the first element added to the set
     * @param str2: represents the second element added to the set
     * @return: Represents the return of the created collection
     */
    public ArrayList<String> createList(String str1, String str2) {
        ArrayList<String> res = new ArrayList<>();
        res.add(str1);
        res.add(str2);

        return res;
    }
}