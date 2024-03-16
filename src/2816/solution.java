public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (true) {
            int total = i * 7 + 4;
            if (total % 3 == 2 && total % 5 == 3) {
                System.out.println(total);
                return;
            }
            i++;
        }

    }
}