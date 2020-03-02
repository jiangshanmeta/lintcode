/**
 * @param A: an array
 * @param B: an array
 * @return: an integer array
 */
const fairCandySwap = function (A, B) {
    const mapB = {};
    let sumA = 0;
    let sumB = 0;
    for(let i=0;i<A.length;i++){
        sumA += A[i];
    }
    for(let i=0;i<B.length;i++){
        sumB += B[i];
        mapB[B[i]] = true;
    }
    const diff = sumB-sumA;
    let result = null;
    // sumA +2B[j] = sumB+2A[i]
    for(let i=0;i<A.length;i++){
        const target = (diff+2*A[i])/2;
        if(mapB[target]){
            if(!result || A[i]<result[0]){
                result = [A[i],target]
            }
        }
    }
    return result;
}

