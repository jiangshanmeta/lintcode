import java.math.BigDecimal;
import java.util.*;

public class Solution {
    public <T extends Number> double numberSummation(T a, T b) {
        BigDecimal sum = new BigDecimal(a.toString()).add(new BigDecimal(b.toString()));
        return sum.doubleValue();
    }

}