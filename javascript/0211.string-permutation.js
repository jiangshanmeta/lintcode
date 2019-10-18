/**
 * @param A: a string
 * @param B: a string
 * @return: a boolean
 */
const Permutation = function (A, B) {
    if(A.length !== B.length){
        return false;
    }

    const counts = new Array(26).fill(0);
    for(let i=0;i<A.length;i++){
        counts[A.charCodeAt(i)-97]++;
        counts[B.charCodeAt(i)-97]--;
    }
    return counts.every(item=>item===0);
}
