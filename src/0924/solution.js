/**
 * @param words: a list of words
 * @param word1: a string
 * @param word2: a string
 * @return: the shortest distance between word1 and word2 in the list
 */
const shortestDistance = function (words, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let result = words.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            if (index2 !== -1) {
                result = Math.min(result, i - index2);
            }
            index1 = i;
        } else if (words[i] === word2) {
            if (index1 !== -1) {
                result = Math.min(result, i - index1);
            }
            index2 = i;
        }
    }
    return result;
};
