import java.util.ArrayList;
import java.util.List;

public class MyList {
    private List<Integer> list = new ArrayList<>();

    public void add(int num) {
        this.list.add(num);
    }

    public int remove() {
        int result = this.list.get(this.list.size() - 1);
        this.list.remove(this.list.size() - 1);
        return result;

    }

    public void show() {
        System.out.print('[');
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i));
            if (i != list.size() - 1) {
                System.out.print(", ");
            }

        }

        System.out.println(']');

    }

}
