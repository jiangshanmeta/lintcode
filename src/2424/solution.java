import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();

        int[] lastRow = { 1 };
        System.out.println(1);

        for (int i = 2; i <= N; i++) {
            int[] row = new int[lastRow.length + 1];
            row[0] = 1;
            row[lastRow.length] = 1;
            for (int j = 1; j < lastRow.length; j++) {
                row[j] = lastRow[j] + lastRow[j - 1];
            }
            for (int j = 0; j < row.length; j++) {
                System.out.print(row[j]);
                if (j != row.length - 1) {
                    System.out.print(" ");
                }
            }
            System.out.println();

            lastRow = row;
        }

    }
}
