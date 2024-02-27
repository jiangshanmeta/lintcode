public class Main {
    public static void main(String[] args) {
        for(int i=100;i<1000;i++){
            int sum = 0;
            int n = i;
            while(n>0){
                int digit = n%10;
                sum += Math.pow(digit,3);
                n /= 10;
            }
            if(sum == i){
                System.out.println(i);
            }
            
        }
    }
}
