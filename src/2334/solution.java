import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        // output the answer to the console according to the
        // requirements of the question
        int n = sc.nextInt();
        int res = 1;
        while(n>1){
            res *= (n--);
        }
        System.out.println(res);
    }
}
