import java.util.Arrays;
import java.util.List;

public class Convert {
    int[] arr;
    int length;

    public Convert(List<Integer> list) {
        this.arr = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            this.arr[i] = list.get(i);
        }

    }

    public int getLength() {
        return length;
    }

    public int[] getArray() {
        return arr;
    }

}