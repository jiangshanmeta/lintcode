import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // output the answer to the console according to the
        // requirements of the question
        while(n>0){
            if(n%10 != 0){
                System.out.print(n%10);
            }
            
            n /= 10;
        }

    }
}
