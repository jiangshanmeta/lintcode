/**
 * @param inputA: Input stream A
 * @param inputB: Input stream B
 * @return: The answer
 */
const inputStream = function (inputA, inputB) {
    const stackA = [];
    const stackB = [];
    for (let i = 0; i < inputA.length; i++) {
        if (inputA[i] === '<') {
            stackA.pop();
        } else {
            stackA.push(inputA[i]);
        }
    }
    for (let i = 0; i < inputB.length; i++) {
        if (inputB[i] === '<') {
            stackB.pop();
        } else {
            stackB.push(inputB[i]);
        }
    }
    if (stackA.length !== stackB.length) {
        return 'NO';
    }
    for (let i = 0; i < stackA.length; i++) {
        if (stackA[i] !== stackB[i]) {
            return 'NO';
        }
    }
    return 'YES';
};
