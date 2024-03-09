import java.util.HashMap;

public class Solution {
    /**
     * @param number: Represents the key to pass data into the set
     * @param str:    Represents the value of the data passed into the set
     * @return: Represents the return of the created set
     */
    public HashMap<Integer, String> createHashMap(int number, String str) {
        HashMap<Integer, String> hashMap = new HashMap<>();
        hashMap.put(number, str);
        return hashMap;
    }
}