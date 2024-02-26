import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        // read data from console
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // output the answer to the console according to the
        // requirements of the question
        int odd = 0;
        int even = 0;
        for(int i=1;i<=n;i++){
            if(i%2 == 0){
                even += i;
            }else{
                odd += i;
            }
        }
        System.out.println(odd);
        System.out.print(even);        
    }
}
