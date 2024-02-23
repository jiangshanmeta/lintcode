public class Solution {
    /**
    * @param str: Represents a string
    * @return Returns the length of the string after removing spaces
    */
    public int getLength(String str) {
        int res = 0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i) != ' '){
                res++;
            }
        }
        return res;
    }
}