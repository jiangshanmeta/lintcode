/**
 * @param nums: an array of integers
 * @param k: an integer
 * @return: the number of unique k-diff pairs
 */
const findPairs = function (nums, k) {
    if(k === 0){
        const numMap = {};
        let result = 0;
        for(let i=0;i<nums.length;i++){
            if(!numMap[nums[i]]){
                numMap[nums[i]] = 1;
            }else if(numMap[nums[i]] === 1){
                result += 1;
                numMap[nums[i]] = 2;
            }
        }
        return result
    }else{
        const numMap = {};
        let result = 0;
        for(let i=0;i<nums.length;i++){
            if(numMap[nums[i]]){
                continue;
            }
            
            if(numMap[nums[i]+k]){
                result += 1;
            }
            if(numMap[nums[i]-k]){
                result += 1;
            }
            numMap[nums[i]] = true;
        }
        return result;
    }
}