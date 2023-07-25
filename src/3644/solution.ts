export class Solution {
    /**
     * @param nums: An integer array
     * @param target: An integer
     * @return: Is it a majority element
     */
    isMajorityElement (nums: number[], target: number): boolean {
        let low = 0;
        let high = nums.length - 1;
        let findIndex = -1;
        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            if (nums[mid] > target) {
                high = mid - 1;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                findIndex = mid;
                break;
            }
        }
        if (findIndex === -1) {
            return false;
        }
        const getStartIndex = (left:number, right:number) => {
            let result = right;
            while (left <= right) {
                const mid = left + ((right - left) >> 1);
                if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    result = Math.min(result, mid);
                    right = mid - 1;
                }
            }
            return result;
        };

        const getEndIndex = (left:number, right:number) => {
            let result = left;
            while (left <= right) {
                const mid = left + ((right - left) >> 1);
                if (nums[mid] > target) {
                    right = mid - 1;
                } else {
                    result = Math.max(result, mid);
                    left = mid + 1;
                }
            }
            return result;
        };

        const count = getEndIndex(findIndex, high) - getStartIndex(low, findIndex) + 1;
        return count > (nums.length >> 1);
    }
}
