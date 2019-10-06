/**
 * @param A: A string
 * @param B: A string
 * @return: if string A contains all of the characters in B return true else return false
 */
const compareStrings = function (A, B) {
    const counts = new Array(26).fill(0);
    for(let i=0;i<A.length;i++){
        counts[A.charCodeAt(i)-65]++;
    }
    for(let i=0;i<B.length;i++){
        const code = B.charCodeAt(i)-65;
        if(counts[code] === 0){
            return false;
        }
        counts[code]--;
    }

    return true;
}