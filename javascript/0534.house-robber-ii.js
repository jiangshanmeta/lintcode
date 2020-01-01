/**
 * @param nums: An array of non-negative integers.
 * @return: The maximum amount of money you can rob tonight
 */
const houseRobber2 = function (nums) {
    if(nums.length === 0){
        return 0;
    }
    if(nums.length<3){
        return Math.max(...nums);
    }
    // 使用第一个
    const withFirst = new Array(nums.length);
    withFirst[0] = nums[0];
    // 因为使用第一个 所以第二个就不用了
    withFirst[1] = nums[0];
    // 不用第一个
    const withoutFirst = new Array(nums.length);
    withoutFirst[0] = 0;
    withoutFirst[1] = nums[1];
    for(let i=2;i<nums.length;i++){
        withFirst[i] = Math.max(withFirst[i-1],withFirst[i-2]+nums[i]);
        withoutFirst[i] = Math.max(withoutFirst[i-1],withoutFirst[i-2]+nums[i]);
    }
    
    return Math.max(
        withoutFirst[withoutFirst.length-1],
        withFirst[withFirst.length-2]
    );
}

