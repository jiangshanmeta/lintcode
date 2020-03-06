/**
 * @param A: a array
 * @return: is it monotonous
 */
const isMonotonic = function (A) {
    if(A[A.length-1]>A[0]){
        for(let i=1;i<A.length;i++){
            if(A[i]<A[i-1]){
                return false;
            }
        }
    }else{
        for(let i=1;i<A.length;i++){
            if(A[i]>A[i-1]){
                return false;
            }
        }
    }

    return true;
}
