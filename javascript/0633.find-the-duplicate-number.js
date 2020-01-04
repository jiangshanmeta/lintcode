/**
 * @param nums: an array containing n + 1 integers which is between 1 and n
 * @return: the duplicate one
 */
const findDuplicate = function (nums) {
    let index = 0;
    while(index<nums.length){
        if(nums[index] === index+1){
            index++;
            continue;
        }
        // 数字num应该在num-1这个位置
        const num = nums[index];
        // 重复
        if(nums[num-1] === num){
            return num;
        }
        nums[index] = nums[num-1];
        nums[num-1] = num;
    }
    
}
