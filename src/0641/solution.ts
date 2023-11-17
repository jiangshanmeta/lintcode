export class Solution {
    /**
     * @param nums: a sorted integer array
     * @param lower: An integer
     * @param upper: An integer
     * @return: a list of its missing ranges
     */
    findMissingRanges (nums: number[], lower: number, upper: number): string[] {
        if (nums.length === 0) {
            if (lower === upper) {
                return [`${lower}`, ];
            }
            return [`${lower}->${upper}`, ];
        }
        const result:string[] = [];
        let prev = lower - 1;
        let index = 0;
        while (index < nums.length && prev < upper) {
            const start = nums[index++];
            const begin = Math.max(prev + 1, lower);
            const lineEnd = Math.min(upper, start - 1);
            if (begin <= lineEnd) {
                if (begin === lineEnd) {
                    result.push(`${begin}`);
                } else {
                    result.push(`${begin}->${lineEnd}`);
                }
            }

            prev = start;
            while (index < nums.length && nums[index] === nums[index - 1] + 1) {
                prev = nums[index];
                index++;
            }
        }

        if (prev < upper) {
            const begin = Math.max(lower, prev + 1);
            if (begin === upper) {
                result.push(`${upper}`);
            } else {
                result.push(`${begin}->${upper}`);
            }
        }

        return result;
    }
}
