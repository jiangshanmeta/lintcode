public class Solution {
    public int getArrayStringLength(String[] stringArray) { 
        int result = 0;
        for(String str : stringArray){
            result += str.length();
        }
        return result;
    }
}