/**
 * @param s: the given string
 * @return: all the possible states of the string after one valid move
 */
const generatePossibleNextMoves = function (s) {
    const list = s.split('');
    const result = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] === '+' && list[i - 1] === '+') {
            list[i] = '-';
            list[i - 1] = '-';
            result.push(list.join(''));
            list[i] = '+';
            list[i - 1] = '+';
        }
    }
    return result;
};
