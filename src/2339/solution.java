import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        // output the answer to the console according to the
        // requirements of the question
        if( (year%4 == 0 && year%100 != 0) || year%400 == 0 ){
            System.out.println("is a leap year");
        }else{
            System.out.println("not a leap year");
        }

    }
}
