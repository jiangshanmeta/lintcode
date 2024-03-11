public class Solution {
    /**
     *
     * @param str1 : str1 represents the original string
     * @param str2 : str2 represents the modified content
     * @return : return means to return the string after the modified content
     */
    public StringBuffer updateString(String str1, String str2) {
        StringBuffer stringBuffer = new StringBuffer(str1);
        stringBuffer.replace(4, 7, str2);
        return stringBuffer;

    }
}