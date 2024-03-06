import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] chars = sc.nextLine().toCharArray();
        for (char c : chars) {
            int index = c - 'A';
            index = 25 - index + 'A';
            System.out.print((char) index);

        }
    }
}
