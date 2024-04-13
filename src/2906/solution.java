import java.util.*;

public class Solution {
    public List<Integer> getList() {
        return Collections.synchronizedList(new ArrayList<Integer>());
    }

}