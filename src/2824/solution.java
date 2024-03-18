import java.util.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String birthday = scanner.nextLine();
        scanner.close();
        BigInteger xor = new BigInteger(birthday).xor(new BigInteger("19990606"));

        System.out.println(xor.toString());

    }
}