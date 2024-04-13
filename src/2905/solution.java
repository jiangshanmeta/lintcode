import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.util.Arrays;

public class Solution {
    public Number upperLimit(Info<? extends Number> info) {
        return info.get();
    }

    public Object lowerLimit(Info<? super String> info) {
        return info.get();
    }

}
