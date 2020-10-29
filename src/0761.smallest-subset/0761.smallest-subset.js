/**
 * @param arr:  an array of non-negative integers
 * @return: minimum number of elements
 */
const minElements = function (arr) {
    arr.sort((a, b) => b - a);
    let sum = 0;
    let rest = 0;
    for (let i = 0; i < arr.length; i++) {
        rest += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        rest -= arr[i];
        if (sum > rest) {
            return i + 1;
        }
    }
    return 0;
};
