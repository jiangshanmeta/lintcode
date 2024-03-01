import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        double sum = 100;
        double h = 50;
        for (int i = 2; i <= n; i++) {
            sum += h * 2;
            h /= 2;
        }
        System.out.printf("%.2f", sum);

    }
}
