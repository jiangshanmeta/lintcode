import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        while(n>0){
            sum += sc.nextInt();
            n--;
        }
        // output the answer to the console according to the
        // requirements of the question
        System.out.println(sum);
    }
}
