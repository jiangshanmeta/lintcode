/**
 * @param A: Sentence A
 * @param B: Sentence B
 * @return: Uncommon Words from Two Sentences
 */
const uncommonFromSentences = function (A, B) {
    const listA = A.split(' ');
    const listB = B.split(' ');
    const countByA = countBy(listA);
    const countByB = countBy(listB);
    const result = [];
    for (let i = 0; i < listA.length; i++) {
        if (countByA[listA[i]] === 1 && !countByB[listA[i]]) {
            result.push(listA[i]);
        }
    }
    for (let i = 0; i < listB.length; i++) {
        if (countByB[listB[i]] === 1 && !countByA[listB[i]]) {
            result.push(listB[i]);
        }
    }
    return result;
};

function countBy (list) {
    const result = {};
    for (let i = 0; i < list.length; i++) {
        result[list[i]] = (result[list[i]] || 0) + 1;
    }
    return result;
}
