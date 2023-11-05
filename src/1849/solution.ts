export class Solution {
    /**
     * @param customers: the number of customers
     * @param grumpy: the owner's temper every day
     * @param x: X days
     * @return: calc the max satisfied customers
     */
    maxSatisfied (customers: number[], grumpy: number[], x: number): number {
        let guaranteed = 0;
        let losed = 0;
        for (let i = 0; i < customers.length; i++) {
            if (grumpy[i] === 1) {
                losed += customers[i];
            } else {
                guaranteed += customers[i];
            }
        }
        if (x >= customers.length) {
            return losed + guaranteed;
        }
        let sum = 0;
        for (let i = 0; i < x - 1; i++) {
            if (grumpy[i]) {
                sum += customers[i];
            }
        }
        let result = guaranteed;
        for (let i = x - 1; i < grumpy.length; i++) {
            if (grumpy[i]) {
                sum += customers[i];
            }
            result = Math.max(result, guaranteed + sum);

            if (grumpy[i - x + 1]) {
                sum -= customers[i - x + 1];
            }
        }

        return result;
    }
}
