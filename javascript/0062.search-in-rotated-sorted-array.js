/**
 * @param A: an integer rotated sorted array
 * @param target: an integer to be searched
 * @return: an integer
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

function findPeak(A){
    let left = 0;
    let right = A.length-1;
    while(A[left]>A[right]){
        if(left+1 === right){
            return left;
        }
        
        const mid = (left+right)>>1;
        if(A[mid]>A[left]){
            left = mid;
        }else{
            right = mid-1;
        }
    }
    return right;
}

function binarySearch(A,target,low,high){
    while(low<=high){
        const mid = (low+high)>>1;
        if(A[mid] === target){
            return mid;
        }
        
        if(A[mid]>target){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
}