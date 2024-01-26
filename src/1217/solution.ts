export class Solution {
    /**
     * @param nums: the gievn integers
     * @return: the total Hamming distance between all pairs of the given numbers
     */
    totalHammingDistance (nums: number[]): number {
        let result = 0;
        for (let i = 0; i < 30; i++) {
            let c = 0;
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] & 1) {
                    c++;
                }
                nums[j] >>= 1;
            }
            result += c * (nums.length - c);
        }
        return result;
    }
}
