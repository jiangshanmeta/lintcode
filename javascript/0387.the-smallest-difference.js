/**
 * @param A: An integer array
 * @param B: An integer array
 * @return: Their smallest difference.
 */
const smallestDifference = function (A, B) {
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);
    let result = Math.abs(A[0]-B[0]);
    let index1 = 0;
    let index2 = 0;
    while(index1<A.length && index2<B.length){
        if(A[index1]<B[index2]){
            result = Math.min(result,B[index2]-A[index1++]);
        }else if(A[index1]>B[index2]){
            result = Math.min(result,A[index1]-B[index2++]);
        }else{
            return 0;
        }
    }
    return result;
}

