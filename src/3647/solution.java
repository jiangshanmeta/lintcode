public class Solution {
    char[] chars;
    int[] counts;
    int size;
    int offset = 0;

    public Solution(String compressedStr) {
        chars = new char[compressedStr.length()];
        counts = new int[compressedStr.length()];
        char[] compress = compressedStr.toCharArray();
        int index = 0;
        while (index < compress.length) {
            chars[size] = compress[index++];
            int count = 0;
            while (index < compress.length && Character.isDigit(compress[index])) {
                count = count * 10 + compress[index++] - '0';
            }
            counts[size++] = count;
        }
    }

    public char next() {
        if (!hasNext()) {
            return '#';
        }
        char result = chars[offset];
        if (counts[offset] == 1) {
            offset++;
        } else {
            counts[offset]--;
        }

        return result;
    }

    public boolean hasNext() {
        return offset < size;
    }
}