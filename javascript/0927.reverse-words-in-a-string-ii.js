/**
 * @param str: a string
 * @return: return a string
 */
const reverseWords = function (str) {
    str = str.split('').reverse();
    let index = 0;
    while (index < str.length) {
        while (index < str.length && str[index] === ' ') {
            index++;
        }
        const start = index;
        while (index < str.length && str[index] !== ' ') {
            index++;
        }
        reverse(str, start, index - 1);
    }
    return str.join('');
};

function reverse (sequence, left, right) {
    while (left < right) {
        const tmp = sequence[right];
        sequence[right] = sequence[left];
        sequence[left] = tmp;
        left++;
        right--;
    }
}
