import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        int i = 0;
        while (i < n) {
            arr[i++] = sc.nextInt();
        }
        if (n > 1) {
            arr[0] ^= arr[n - 1];
            arr[n - 1] ^= arr[0];
            arr[0] ^= arr[n - 1];
        }

        for (int item : arr) {
            System.out.print(item);
            System.out.print(' ');

        }

    }
}
