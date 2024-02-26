import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int res = 0;
        for(int i=0;i<s.length();i++){
            if( (byte)s.charAt(i) > 96 ){
                res++;
            }
        }
        System.out.println(res);
    }
}
