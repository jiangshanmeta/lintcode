/**
 * @param n: An integer
 * @return: An array storing 1 to the largest number with n digits.
 */
const numbersByRecursion = function (n) {
    if (n < 1) {
        return [];
    }

    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
    n > 1 && recursion([1, 2, 3, 4, 5, 6, 7, 8, 9, ], n - 1, result);
    return result;
};

function recursion (lastLevel, count, result) {
    const nextLevel = [];
    for (let i = 0; i < lastLevel.length; i++) {
        const node = lastLevel[i] * 10;
        for (let j = 0; j < 10; j++) {
            result.push(node + j);
            nextLevel.push(node + j);
        }
    }
    count--;
    count && recursion(nextLevel, count, result);
}
