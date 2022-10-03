/**
 * @param matrix: An array of integers
 * @return: An array of integers
 */
const printZMatrix = function (matrix) {
    const M = matrix.length;
    const N = matrix[0].length;

    const result = [];
    let count = 0;
    const sequence = [];
    // 处理左上半矩阵
    for (let index = 0; index < N; index++) {
        let i = 0;
        let j = index;
        while (i < M && j > -1) {
            sequence.push(matrix[i][j]);
            i++;
            j--;
        }
        // 处理遍历方向
        if (count & 1) {
            for (let k = 0; k < sequence.length; k++) {
                result.push(sequence[k]);
            }
        } else {
            for (let k = sequence.length - 1; k > -1; k--) {
                result.push(sequence[k]);
            }
        }
        sequence.length = 0;
        count++;
    }
    // 处理右下半矩阵
    for (let index = 1; index < M; index++) {
        let i = index;
        let j = N - 1;
        while (i < M && j > -1) {
            sequence.push(matrix[i][j]);
            i++;
            j--;
        }
        if (count & 1) {
            for (let k = 0; k < sequence.length; k++) {
                result.push(sequence[k]);
            }
        } else {
            for (let k = sequence.length - 1; k > -1; k--) {
                result.push(sequence[k]);
            }
        }
        sequence.length = 0;
        count++;
    }

    return result;
};
