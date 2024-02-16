public class Solution {
    public int add(int number) {
        int i = 3;
        int sum = 0;
        while(i<=number){
            sum += i;
            i += 3;
        }
        
        return sum;
    }
}
