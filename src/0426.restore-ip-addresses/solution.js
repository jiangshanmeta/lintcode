/**
 * @param s: the IP string
 * @return: All possible valid IP addresses
 */
const restoreIpAddresses = function (s) {
    const result = [];
    backTracking(s, 0, [], result);
    return result;
};

function backTracking (s, index, sequence, result) {
    if (index.length === s.length || sequence.length === 4) {
        if (index === s.length && sequence.length === 4) {
            result.push(sequence.join('.'));
        }
        return;
    }
    if (index < s.length) {
        sequence.push(s[index]);
        backTracking(s, index + 1, sequence, result);
        sequence.pop();
    }
    if (index < s.length - 1 && s[index] !== '0') {
        const num = +s.substring(index, index + 2);
        sequence.push(num);
        backTracking(s, index + 2, sequence, result);
        sequence.pop();
    }
    if (index < s.length - 2 && s[index] !== '0') {
        const num = +s.substring(index, index + 3);
        if (num < 256) {
            sequence.push(num);
            backTracking(s, index + 3, sequence, result);
            sequence.pop();
        }
    }
}
