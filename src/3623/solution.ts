export class Solution {
    /**
     * @param nums: An array
     * @return: Sum of Digits in the Minimum Number is Even or Not
     */
    sumOfDigits (nums: number[]): boolean {
        let num = Math.min(...nums);
        let sum = 0;
        while (num) {
            const digit = num % 10;
            sum += digit;
            num = (num - digit) / 10;
        }
        return sum % 2 === 0;
    }
}
