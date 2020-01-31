/**
 * @param nums: an array
 * @return: the number occurs twice and the number that is missing
 */
const findErrorNums = function (nums) {
    let index = 0;
    let duplicate;
    while(index<nums.length){
        if(nums[index] === index+1){
            index++;
            continue;
        }
        const m = nums[index];
        if(nums[m-1] === m){
            duplicate = m;
            index++;
        }else{
            const tmp = nums[m-1];
            nums[m-1] = nums[index];
            nums[index] = tmp;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i+1){
            return [duplicate,i+1];
        }
    }
}

