/**
 * @param words: a list of string
 * @return: a boolean
 */
const validWordSquare = function (words) {
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words.length || i >= words[i].length) {
                break;
            }
            if (words[i][j] !== words[j][i]) {
                return false;
            }
        }
    }
    return true;
};
