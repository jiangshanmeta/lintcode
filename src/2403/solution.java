import java.util.HashMap;
import java.util.Map;

public class Solution {
    /**
     * @param map: Represents the incoming set
     */
    public void printHashMap(HashMap<Integer, String> map) {
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.print("key: " + entry.getKey() + "; ");
            System.out.println("value: " + entry.getValue() + ";");
        }

    }
}
