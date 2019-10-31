/**
 * @param A: An array of non-negative integers
 * @return: The maximum amount of money you can rob tonight
 */
const houseRobber = function (A) {
    if(A.length === 0){
        return 0;
    }else if(A.length === 1){
        return A[0];
    }

    let a = A[0];
    let b = Math.max(A[0],A[1]);
    for(let i=2;i<A.length;i++){
        [a,b] = [b, Math.max(a+A[i],b)];
    }
    return b;
}

