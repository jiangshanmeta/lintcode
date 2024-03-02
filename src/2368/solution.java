import java.util.Arrays;
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
        Arrays.sort(arr);
        for (int item : arr) {
            System.out.print(item);
            System.out.print(' ');
        }

    }
}
