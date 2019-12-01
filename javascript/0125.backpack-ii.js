/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @param V: Given n items with value V[i]
 * @return: The maximum value
 */
const backPackII = function (m, A, V) {
    // dpA[j] 能不能到达这个重量
    // dpV[j] 这个重量对应价值的最大值
    const dpA = new Array(m+1).fill(false);
    const dpV = new Array(m+1).fill(0);
    dpA[0] = true;
    for(let i=0;i<A.length;i++){
        const weight = A[i];
        for(let j=m;j>=weight;j--){
            if(!dpA[j-weight]){
                continue;
            }
            dpA[j] = true;
            dpV[j] = Math.max(dpV[j],dpV[j-weight]+V[i]);
        }
    }

    return Math.max(...dpV);
}

