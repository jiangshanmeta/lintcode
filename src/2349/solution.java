public class Solution {
    /**
     * @param str: str represents the string passed in
     * @return: return means to return an array with
     *          the number of upper and lower case letters after counting
     */
    public int[] statistics(String str) {
        int[] solution = new int[4];
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (Character.isUpperCase(c)) {
                solution[0]++;
            } else if (Character.isLowerCase(c)) {
                solution[1]++;
            } else if (Character.isDigit(c)) {
                solution[2]++;
            } else {
                solution[3]++;
            }
        }
        return solution;
    }
}