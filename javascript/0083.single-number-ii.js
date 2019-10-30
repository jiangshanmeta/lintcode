/**
 * @param A: An integer array
 * @return: An integer
 */
const singleNumberII = function (A) {
    const counts = new Array(32).fill(0);
    for(let i=0;i<A.length;i++){
        let num = A[i];
        for(let j=0;j<32;j++){
            if(num&1){
                counts[31-j]++;
            }
            num >>= 1;
        }
    }
    let result = 0;
    for(let i=0;i<32;i++){
        result = (result<<1)+(counts[i]%3 === 0?0:1);
    }
    return result;
}
