/**
 * @param A: an integer array
 * @param target: An integer
 * @param k: An integer
 * @return: an integer array
 */
const kClosestNumbers = function (A, target, k) {
    let index = -1;
    let low = 0;
    let high = A.length-1;
    while (low<=high){
        const mid = (low+high) >> 1;
        if(A[mid]>target){
            high = mid-1;
        }else{
            index = Math.max(index,mid);
            low = mid+1;
        }
    }
    if(index === -1){
        return A.slice(0,k);
    }
    const result = [];
    let left = index;
    let right = index+1;
    while(k>0 && left>-1 && right<A.length){
        const diffLeft = target-A[left];
        const diffRight = A[right]-target;
        if(diffLeft>diffRight){
            result.push(A[right++]);
        }else{
            result.push(A[left--]);
        }
        k--;
    }
    while(k>0 && left>-1){
        result.push(A[left--]);
        k--;
    }
    while(k>0 && right<A.length){
        result.push(A[right++]);
        k--;
    }
    
    return result;
}
