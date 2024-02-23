import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // output the answer to the console according to the requirements of the question
        int res = 0;
        for(int i=1;i<=n;i++){
            res += i;
        }
        System.out.println(res);
    }
}
