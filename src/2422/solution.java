import java.util.ArrayList;
import java.util.List;

public class Solution {
    /**
     * @param str: Limit the string to be longer than subStr
     * @param subStr: Strings shorter than str
     * @return subStr appears as an index array in Str
     */
    public int[] getIndexArray(String str, String subStr) {
        List<Integer> list = new ArrayList<>();
        int[] next = getNext(subStr);
        char[] chars = str.toCharArray();
        int count = 0;
        for(int i=0;i<str.length();i++){
            while(count>0 && chars[i] != subStr.charAt(count)){
                count = next[count-1];
            }
            if(chars[i] == subStr.charAt(count)){
                count++;
            }
            if(count == subStr.length()){
                list.add(i-subStr.length()+1);
                count = next[count-1];
            }

        }
        if(list.size() == 0){
            return new int[]{-1};
        }
        int[] result = new int[list.size()];
        for(int i=0;i<list.size();i++){
            result[i] = list.get(i);
        }
        return result;
    }

    private int[] getNext(String subStr){
        char[] chars = subStr.toCharArray();
        int[] next = new int[chars.length];
        int count = 0;
        for(int i=1;i<next.length;i++){
            while(count>0 && chars[i] != chars[count]){
                count = chars[count-1];
            }
            if(chars[i] == chars[count]){
                count++;
            }
            next[i] = count;
        }

        return next;
    }
}
