import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int n = new Scanner(System.in).nextInt();

        int num = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(num++);
                if (j != n - 1) {
                    System.out.print(' ');
                }
            }
            System.out.println();
        }

    }
}