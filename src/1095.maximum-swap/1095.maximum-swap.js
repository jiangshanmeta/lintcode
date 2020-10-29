/**
 * @param num: a non-negative intege
 * @return: the maximum valued number
 */
const maximumSwap = function (num) {
    const list = String(num).split('');
    const stackNum = [];
    const stackIndex = [];
    for (let i = 0; i < list.length; i++) {
        const item = +list[i];
        // 重点就是这个循环了
        while (stackNum.length && item >= stackNum[stackNum.length - 1]) {
            // 相等的情况 如果是在本来的位置 不动
            if (item === stackNum[stackNum.length - 1] && stackIndex[stackIndex.length - 1] === stackIndex.length - 1) {
                break;
            }
            stackNum.pop();
            stackIndex.pop();
        }
        stackNum.push(item);
        stackIndex.push(i);
    }
    for (let i = 0; i < stackNum.length; i++) {
        if (i !== stackIndex[i]) {
            const index = stackIndex[i];
            const tmp = list[index];
            list[index] = list[i];
            list[i] = tmp;
            return +list.join('');
        }
    }
    return num;
};
