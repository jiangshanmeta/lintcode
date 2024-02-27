import java.util.ArrayList;


public class Main {
    public static void main(String[] args) {
        for (int prime: getPrimes(100)  ){
            System.out.println(prime);
        }
        
    }

    public static ArrayList<Integer> getPrimes(int n){
        ArrayList<Integer> primes = new ArrayList<Integer>();
        
        boolean[] excluded = new boolean[n+1];
        for(int i=2;i<=n;i++){
            if(!excluded[i]){
                primes.add(i);
            }

            for(int prime : primes){
                if(prime*i>n){
                    break;
                }
                excluded[prime*i] = true;
                if(i%prime == 0){
                    break;
                }

            }
            
        }

        return primes;
    }


}