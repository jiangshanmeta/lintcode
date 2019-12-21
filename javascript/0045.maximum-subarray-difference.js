/**
 * @param nums: A list of integers
 * @return: An integer indicate the value of maximum difference between two substrings
 */
const maxDiffSubArrays = function (nums) {
    const right2leftMaxList = new Array(nums.length);
    const right2leftMinList = new Array(nums.length);
    // right2leftMaxList[i] 从i到-1这个区间的最大值
    // right2leftMinList[i] 从i到-1这个区间的最小值
    right2leftMaxList[nums.length-1] = nums[nums.length-1];
    right2leftMinList[nums.length-1] = nums[nums.length-1];
    rightMax = nums[nums.length-1];
    rightMin = nums[nums.length-1];
    
    for(let i=nums.length-2;i>0;i--){
        rightMax = rightMax>0?rightMax+nums[i]:nums[i];
        rightMin = rightMin<0?rightMin+nums[i]:nums[i];
        right2leftMaxList[i] = Math.max(rightMax,right2leftMaxList[i+1]);
        right2leftMinList[i] = Math.min(rightMin,right2leftMinList[i+1]);
    }
    // 和上面right2left类似 其实这个空间可以压一下 然而已经是O(N)的空间复杂度了
    const left2RightMaxList = new Array(nums.length);
    const left2RightMinList = new Array(nums.length);
    left2RightMaxList[0] = nums[0];
    left2RightMinList[0] = nums[0];
    let leftMax = nums[0];
    let leftMin = nums[0];
    let result = Math.max(
        Math.abs(nums[0]-right2leftMaxList[1]),
        Math.abs(nums[0]-right2leftMinList[1])
    );
    for(let i=1;i<nums.length-1;i++){
        leftMax = leftMax>0?leftMax+nums[i]:nums[i];
        leftMin = leftMin<0?leftMin+nums[i]:nums[i];
        
        left2RightMaxList[i] = Math.max(left2RightMaxList[i-1],leftMax);
        left2RightMinList[i] = Math.min(left2RightMinList[i-1],leftMin);
        
        result = Math.max(
            result,
            Math.abs(left2RightMaxList[i]-right2leftMaxList[i+1]),
            Math.abs(left2RightMaxList[i]-right2leftMinList[i+1]),
            Math.abs(left2RightMinList[i]-right2leftMaxList[i+1]),
            Math.abs(left2RightMinList[i]-right2leftMinList[i+1])
        );
        
    }
    
    return result;
}