public class Solution {
    /**
     * @param str: Indicates the string passed in
     * @return: means return the case-converted string
     */
    public String alphabetConversion(String str) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (Character.isUpperCase(c)) {
                stringBuilder.append(Character.toLowerCase(c));
            } else {
                stringBuilder.append(Character.toUpperCase(c));
            }

        }
        return stringBuilder.toString();

    }
}