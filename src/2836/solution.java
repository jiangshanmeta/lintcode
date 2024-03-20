import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int res = Integer.MIN_VALUE;
        while(sc.hasNext()){
            res = Math.max(res,sc.nextInt() );
        }
        System.out.println("The maximum of the three values is："+res);
    }
}