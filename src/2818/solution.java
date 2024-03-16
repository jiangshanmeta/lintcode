import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        double result = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (i + j == N - 1) {
                    result += scanner.nextDouble();
                } else {
                    scanner.nextDouble();
                }

            }

        }
        System.out.printf("%.2f", result);

    }
}