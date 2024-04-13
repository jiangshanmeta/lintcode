import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.*;

public class Solution<T> {
    T[] arr;

    public Solution(Class cls, int size) {
        this.arr = (T[]) Array.newInstance(cls, size);
    }

    public void initArrData(T[] src) {
        this.arr = Arrays.copyOf(src, src.length);
    }

    public T[] getArr() {
        return arr;
    }
}
