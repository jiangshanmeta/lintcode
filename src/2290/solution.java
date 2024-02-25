public class Main {
    public static void main(String[] args) {
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);
        // write your code here
        // please print the greatest common divisor of a and b
        int c = gcd(a, b);
        System.out.println(c);

    }

    static int gcd(int a,int b){
        if(b == 0){
            return a;
        }
        return gcd(b, a%b);
    }
}
