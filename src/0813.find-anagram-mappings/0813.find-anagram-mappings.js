/**
 * @param A: lists A
 * @param B: lists B
 * @return: the index mapping
 */
const anagramMappings = function (A, B) {
    // 这题OJ有问题，AC了，就是hash而已
    const bMap = [];
    for (let i = 0; i < B.length; i++) {
        bMap[B[i]] = i;
    }
    const result = [];
    for (let i = 0; i < A.length; i++) {
        result.push(bMap[A[i]]);
    }
    return result;
};
