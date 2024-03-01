public class Solution {
    /**
     * @param num: num is used to receive incoming integer parameters
     * @methods textDaffodils(): textDaffodils() is a boolean type return
     *          value member method that creates an instance of the internal class
     */
    private int num;

    public Solution(int num) {
        this.num = num;
    }

    public boolean testDaffodils() {
        Daffodils daffodils = new Daffodils();
        boolean boolean2 = daffodils.isDaffodilNumber();

        return boolean2;
    }

    private class Daffodils {
        public boolean isDaffodilNumber() {
            if (num < 100 || num >= 1000) {
                return false;
            }
            int copy = num;
            int sum = 0;
            while (copy > 0) {
                sum += Math.pow(copy % 10, 3);
                copy /= 10;
            }
            return sum == num;
        }
    }
}
