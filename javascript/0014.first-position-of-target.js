/**
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(nums[mid]>target){
            high = mid-1;
        }else if(nums[mid]<target){
            low = mid+1;
        }else{
            let result = mid;
            high = mid;
            while(low<=high){
                const mid = (low+high) >> 1;
                if(nums[mid]<target){
                    low = mid+1;
                }else{
                    result = Math.min(result,mid);
                    high = mid-1;
                }
            }
            return result;
        }
    }
    return -1;
}