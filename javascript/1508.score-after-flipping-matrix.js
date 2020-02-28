/**
 * @param A: a matrix
 * @return: the score
 */
const matrixScore = function (A) {
    const M = A.length;
    const N = A[0].length;
    const half = M/2;
    // 第一列都要保证为1
    for(let i=0;i<M;i++){
        if(A[i][0] === 1){
            continue;
        }
        for(let j=0;j<N;j++){
            A[i][j] ^= 1;
        }
    }
    for(let j=1;j<N;j++){
        // 每一列尽可能变为1
        let count = 0;
        for(let i=0;i<M;i++){
            if(A[i][j] === 0){
                count++;
            }
        }
        if(count<half){
            continue;
        }
        for(let i=0;i<M;i++){
            A[i][j] ^= 1;
        }
    }

    return A.map((row)=>{
        return row.reduce((last,cur)=>{
            last <<= 1;
            return last+cur;
        },0);
    }).reduce((item,sum)=>{
        return sum+item;
    },0);
}
