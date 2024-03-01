import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        x -= sc.nextInt();
        y -= sc.nextInt();

        System.out.printf("%.2f", Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));

    }
}
