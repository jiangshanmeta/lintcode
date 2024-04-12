import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        String str = new Scanner(System.in).nextLine();
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = str.length() - 1; i > -1; i--) {
            stringBuilder.append(str.charAt(i));
        }

        System.out.println(stringBuilder.toString());

    }
}