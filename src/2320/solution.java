import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        double root = Math.sqrt(n);

        System.out.println(String.format("%.2f", root));
    }
}
