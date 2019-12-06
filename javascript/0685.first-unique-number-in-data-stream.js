/**
 * @param nums: a continuous stream of numbers
 * @param number: a number
 * @return: returns the first unique number
 */
const firstUniqueNumber = function (nums, number) {
    if(nums.length === 0){
        return -1;
    }
    
    const map = {};
    let index = 0;
    while(index<nums.length){
        map[nums[index]] = (map[nums[index]] || 0)+1;
        if(nums[index++] === number){
            break;
        }
    }
    // 找不到结束
    if(nums[index-1] !== number){
        return -1;
    }
    
    for(let i=0;i<index;i++){
        if(map[nums[i]] === 1){
            return nums[i];
        }
    }
    return -1;
}