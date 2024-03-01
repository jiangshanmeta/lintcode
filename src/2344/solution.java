import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n == 1) {
            System.out.println("not perfect number");
            return;
        }
        int sum = 1;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i != 0) {
                continue;
            }
            int other = n / i;
            sum += i;
            if (i != other) {
                sum += other;
            }

        }

        System.out.println(sum == n ? "is perfect number" : "not perfect number");

    }
}
