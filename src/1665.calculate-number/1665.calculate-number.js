/**
 * @param num: the num
 * @return: the array subject to the description
 */
const calculateNumber = function (num) {
    const stack = [];
    let count = 0;
    let index = 1;
    while (num) {
        if (num & 1) {
            stack.push(index);
            count++;
        }
        index++;
        num >>= 1;
    }
    const result = [count, ];
    for (let i = stack.length - 1; i > -1; i--) {
        result.push(index - stack[i]);
    }
    return result;
};
