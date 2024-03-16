public class Solution {
    public String add(String a, String b) {

        double d1 = Double.parseDouble(a);
        double d2 = Double.parseDouble(b);
        double sum = d1 + d2;
        String sum2Digit = String.format("%.2f", sum);
        return sum2Digit;

    }
}