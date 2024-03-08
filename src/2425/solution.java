import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double height = scanner.nextDouble();
        double paperThickness = scanner.nextDouble();

        int count = 0;
        while (paperThickness < height) {
            count++;
            paperThickness *= 2.0;
        }

        System.out.println("Need to fold " + count + " times");
    }
}
