public class Solution {

    public String division(int a, int b) {
        Calculators calculators = new Calculators();
        try {
            calculators.calc(a, b);
            return "Calculated results are normal.";
        } catch (Exception e) {
            return "The divisor cannot be 0.";

        }

    }
}