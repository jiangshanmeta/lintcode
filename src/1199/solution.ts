export class Solution {
    /**
     * @param num: an integer
     * @return: returns true when it is a perfect number and false when it is not
     */
    checkPerfectNumber (num: number): boolean {
        if (num < 2) {
            return false;
        }
        const max = Math.sqrt(num);
        let sum = 1;
        for (let i = 2; i <= max; i++) {
            if (num % i !== 0) {
                continue;
            }
            const b = num / i;
            sum += i;
            if (i !== b) {
                sum += b;
            }
        }
        return sum === num;
    }
}
