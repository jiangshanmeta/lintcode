function gt (nums1:number[], nums2:number[]) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] > nums2[i]) {
            return true;
        } else if (nums1[i] < nums2[i]) {
            return false;
        }
    }
    return false;
}

export class Solution {
    /**
   * @param nums: An integer array.
   * @param k: Length.
   * @return: Largest subarray of length k.
   */
    largestSubarray (nums: number[], k: number): number[] {
        let result = nums.slice(0, k);
        for (let i = 1; i <= nums.length - k; i++) {
            const sub = nums.slice(i, i + k);
            if (gt(sub, result)) {
                result = sub;
            }
        }
        return result;
    }
}
