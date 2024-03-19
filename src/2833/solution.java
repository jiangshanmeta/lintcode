public class Main {
    public static void main(String[] args) {
        int cnt = 0;
        double min = -10.8;
        double max = 5.9;
        for (int i = (int) min; i <= (int) max; i++) {
            int abs = Math.abs(i);
            if (abs > 6 || abs < 3) {
                System.out.println(i);
                cnt++;
            }

        }
        System.out.println("There are " + cnt + " integers with absolute values greater than 6 or less than 2.1\n");

    }
}