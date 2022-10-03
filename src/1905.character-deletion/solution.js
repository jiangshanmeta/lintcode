/**
 * @param str: The first string given
 * @param sub: The given second string
 * @return: Returns the deleted string
 */
const CharacterDeletion = function (str, sub) {
    const set = new Set(sub);
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            continue;
        }
        result.push(str[i]);
    }
    return result.join('');
};
