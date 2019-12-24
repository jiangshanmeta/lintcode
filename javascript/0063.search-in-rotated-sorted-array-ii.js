/**
 * @param A: an integer ratated sorted array and duplicates are allowed
 * @param target: An integer
 * @return: a boolean 
 */
const search = function (A, target) {
    if(A.length<2){
        return binarySearch(A,target,0,A.length-1);
    }
    const peakIndex = findPeak(A);
    if(target<A[0]){
        return binarySearch(A,target,peakIndex+1,A.length-1);
    }else{
        return binarySearch(A,target,0,peakIndex);   
    }
    
}

function findPeak(nums){
    let left = 0;
    let right = nums.length-1;
    while(nums[left]>=nums[right]){
        if(left+1 === right){
            return left;
        }
        const mid = (left+right) >> 1;
        // 中间和两边元素都相等 只能遍历了
        if(nums[left] === nums[right] && nums[left] === nums[mid]){
            let maxVal = nums[left];
            let maxIndex = left;
            for(let i=left+1;i<right+1;i++){
                if(nums[i] >= maxVal){
                    maxVal = nums[i];
                    maxIndex = i;
                }else{
                    return i-1;
                }
            }
            return maxIndex;
        }

        if(nums[mid]>=nums[left]){
            left = mid;
        }else{
            right = mid;
        }
    }

    return nums.length-1;
    
}

function binarySearch(A,target,low,high){
    while(low<=high){
        const mid = (low+high)>>1;
        if(A[mid] === target){
            return true;
        }
        
        if(A[mid]>target){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return false;
}