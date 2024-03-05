import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        int res = 1;
        while(b>0){
            if( (b&1) == 1 ){
                res *= a;
            }
            a *= a;
            b >>= 1;
        }

        // output the answer to the console according to the
        // requirements of the question
        System.out.println(res);
    }
}