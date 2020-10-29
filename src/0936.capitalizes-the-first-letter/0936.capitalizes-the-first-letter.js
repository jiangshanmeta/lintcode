/**
 * @param s: a string
 * @return: a string after capitalizes the first letter
 */
const capitalizesFirst = function (s) {
    const result = [];
    let lastIsSpace = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            lastIsSpace = true;
            result.push(s[i]);
        } else if (lastIsSpace) {
            lastIsSpace = false;
            result.push(s[i].toUpperCase());
        } else {
            result.push(s[i]);
        }
    }

    return result.join('');
};
