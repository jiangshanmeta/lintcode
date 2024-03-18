public class Solution {
    public static boolean isFriend(int n) {
        if(n<3){
            return false;
        }
        return count1(n) == 2;
    }

    public static int count1(int n){
        int res = 0;
        while(n>0){
            res++;
            n &= (n-1);
        }
        return res;
    }
}