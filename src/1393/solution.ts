export class Solution {
    /**
     * @param ages:
     * @return:
     */
    numFriendRequests (ages: number[]): number {
        let result = 0;
        ages.sort((a, b) => a - b);
        let left = 0;
        let right = 0;
        for (let i = 0; i < ages.length; i++) {
            const mid = ages[i] / 2 + 7;
            while (left < ages.length && ages[left] <= mid) {
                left++;
            }
            while (right < ages.length && ages[right] <= ages[i]) {
                right++;
            }
            if (right > left) {
                result += right - left - 1;
            }
        }
        return result;
    }
}
