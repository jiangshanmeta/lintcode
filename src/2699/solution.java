public class Solution {

    public void division(Object num) throws Exception {
        Calculators calculators = new Calculators();
        calculators.open();

        try {
            calculators.indexation(num);
        } catch (Exception e) {

        } finally {
            calculators.close();
        }

    }
}