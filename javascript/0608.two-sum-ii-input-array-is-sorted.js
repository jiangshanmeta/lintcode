/**
 * @param nums: an array of Integer
 * @param target: target = nums[index1] + nums[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum = function (nums, target) {
    let index1 = 0;
    let index2 = nums.length-1;
    while(index1<index2){
        const sum = nums[index1]+nums[index2];
        if(sum>target){
            index2--;
        }else if(sum<target){
            index1++;
        }else{
            return [index1+1,index2+1];
        }
    }
}
