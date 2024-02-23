import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        // write your code here
        // you need to swap a and b
        a = a^b;
        b = a^b;
        a = a^b;

        // keep the code below
        System.out.println("a = " + a + ", b = " + b);
    }
}
