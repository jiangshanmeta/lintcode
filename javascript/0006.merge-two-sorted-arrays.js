/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
const mergeSortedArray = function (A, B) {
    const result = [];
    let index1 = 0;
    let index2 = 0;
    while(index1<A.length && index2<B.length){
        if(A[index1]<B[index2]){
            result.push(A[index1++]);
        }else if(A[index1]>B[index2]){
            result.push(B[index2++]);
        }else{
            result.push(A[index1++]);
            result.push(B[index2++]);
        }
    }

    while(index1<A.length){
        result.push(A[index1++]);
    }

    while(index2<B.length){
        result.push(B[index2++]);
    }
    return result;
}