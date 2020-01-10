/**
 * @param nums: an array
 * @param k: an integer
 * @return: the maximum average value
 */
const findMaxAverage = function (nums, k) {
    let result = -Infinity;
    let sum = 0;
    for(let i=0;i<k-1;i++){
        sum += nums[i];
    }
    for(let i=k-1;i<nums.length;i++){
        sum += nums[i];
        result = Math.max(result,sum/k);
        sum -= nums[i-k+1];
    }

    return result;
}

