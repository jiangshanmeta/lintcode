export class Solution {
    /**
     * @param nums1: an array
     * @param nums2: an array
     * @return:  find all the next greater numbers for nums1's elements in the corresponding places of nums2
     */
    nextGreaterElement (nums1: number[], nums2: number[]): number[] {
        const num2Map = new Map<number, number>();
        const nextRest = new Array<number>(nums2.length).fill(-1);
        const stack:number[] = [];
        for (let i = 0; i < nums2.length; i++) {
            while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
                const index = stack.pop()!;
                nextRest[index] = nums2[i];
            }
            stack.push(i);
            num2Map.set(nums2[i], i);
        }

        const result = new Array<number>(nums1.length);
        for (let i = 0; i < nums1.length; i++) {
            result[i] = nextRest[num2Map.get(nums1[i])!];
        }
        return result;
    }
}
