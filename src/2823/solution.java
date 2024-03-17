import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] angles = new int[3];
        angles[0] = scanner.nextInt();
        angles[1] = scanner.nextInt();
        angles[2] = 180 - angles[0] - angles[1];
        Arrays.sort(angles);
        if (angles[0] <= 0 || angles[2] >= 180) {
            System.out.println("无法组成三角形");

        } else if (angles[2] > 90) {
            System.out.println("钝角三角形");
        } else if (angles[2] == 90) {
            System.out.println("直角三角形");
        } else {
            System.out.println("锐角三角形");
        }

    }
}