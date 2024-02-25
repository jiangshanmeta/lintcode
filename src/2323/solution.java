import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if(n>89){
            System.out.println('A');
        }else if(n>79){
            System.out.println('B');
        }else if(n>69){
            System.out.println('C');
        }else if(n>59){
            System.out.println('D');
        }else{
            System.out.println('E');
        }

    }
}
