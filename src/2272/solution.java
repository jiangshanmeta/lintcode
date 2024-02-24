import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int res = sc.nextInt();
        res = Math.max(res,sc.nextInt());
        res = Math.max(res,sc.nextInt());
        System.out.println(res);

    }
}
