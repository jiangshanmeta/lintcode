public class Solution {
    /**
     * @param str         str represents the string passed in
     * @param indexStart  indexStart represents the start position of the
     *                    content to be deleted
     * @param indexEnding indexEnding represents the end position of the
     *                    content to be deleted
     * @return return means to return the string after deleting the specified
     *         position
     */
    public StringBuffer deleteString(String str, int indexStart,
            int indexEnding) {
        StringBuffer stringBuffer = new StringBuffer(str);
        stringBuffer.delete(indexStart, indexEnding);
        return stringBuffer;

    }
}