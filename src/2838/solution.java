import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int n = new Scanner(System.in).nextInt();
        Random random = new Random(n);
        for (int i = 0; i < 50; i++) {
            System.out.println(random.nextInt(n) + 1);
        }

    }
}