import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // output the answer to the console according to the
        // requirements of the question
        if( (n&(n-1)) == 0 ){
            System.out.println("It's a power of two");
        }else{
            System.out.println("It's not a power of two");
        }
    }
}
