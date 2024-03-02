public class Solution {
    /**
     * @param number: Represents the incoming number
     * @return: A boolean value representing whether the
     *          return is a palindrome or not
     */
    public boolean judgePalindrome(int number) {
        String str = String.valueOf(number);
        int left = 0;
        int right = str.length()-1;
        while (left<right){
            if(str.charAt(left++) != str.charAt(right--)){
                return false;
            }
        }
        return true;
        
    }
}