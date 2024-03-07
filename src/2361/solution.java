import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int result = 0;

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < i; j++) {
                scanner.nextInt();
            }
            result += scanner.nextInt();
            for (int j = i + 1; j < N; j++) {
                scanner.nextInt();
            }
        }
        scanner.close();
        System.out.println(result);

    }
}
