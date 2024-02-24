import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // output the answer to the console according to the
        // requirements of the question
        if(n%3 == 0 && n%5 == 0){
            System.out.println("It's a multiple of three and five");
        }else{
            System.out.println("It's not a multiple of three and five");
        }
    }
}
