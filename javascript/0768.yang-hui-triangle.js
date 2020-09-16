/**
 * @param n: a Integer
 * @return: the first n-line Yang Hui's triangle
 */
const calcYangHuisTriangle = function (n) {
    if (n === 0) {
        return [];
    }
    const result = [[1, ], ];
    for (let i = 1; i < n; i++) {
        const lastRow = result[result.length - 1];
        const newRow = [1, ];
        for (let j = 0; j < i - 1; j++) {
            newRow.push(lastRow[j] + lastRow[j + 1]);
        }
        newRow.push(1);
        result.push(newRow);
    }
    return result;
};
