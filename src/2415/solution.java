import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int result = N * (N + 1) / 2;
        while (N > 1) {
            result -= scanner.nextInt();
            N--;
        }
        scanner.close();
        System.out.println(result);

    }
}
