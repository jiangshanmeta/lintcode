/**
 * @param Matrix: the input
 * @return: the element which appears every row
 */
const FindElements = function (Matrix) {
    const N = Matrix.length;
    const M = Matrix[0].length;
    const map = {};
    for (let i = 0; i < N; i++) {
        const map2 = {};
        for (let j = 0; j < M; j++) {
            const node = Matrix[i][j];
            if (map2[node]) {
                continue;
            }
            map2[node] = true;
            map[node] = (map[node] || 0) + 1;
            if (map[node] === N) {
                return node;
            }
        }
    }
};
