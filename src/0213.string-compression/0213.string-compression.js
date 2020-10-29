/**
 * @param originalString: a string
 * @return: a compressed string
 */
const compress = function (originalString) {
    const result = [];
    let index = 0;
    while (index < originalString.length) {
        const char = originalString[index++];
        let count = 1;
        while (index < originalString.length && originalString[index] === char) {
            count++;
            index++;
        }
        result.push(char, count);
    }
    return result.length < originalString.length ? result.join('') : originalString;
};
