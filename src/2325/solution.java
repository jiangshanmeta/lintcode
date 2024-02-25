import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        // output the answer to the console according to the
        // requirements of the question
        for(int i=s.length()-1;i>-1;i-- ){
            System.out.print(s.charAt(i));
        }

    }
}
