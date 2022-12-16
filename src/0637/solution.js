/**
 * @param word: a non-empty string
 * @param abbr: an abbreviation
 * @return: true if string matches with the given abbr or false
 */
const validWordAbbreviation = function (word, abbr) {
    let index1 = 0;
    let index2 = 0;
    while (index1 < word.length && index2 < abbr.length) {
        const code = abbr.charCodeAt(index2);
        if (isDigit(code)) {
            let num = +abbr[index2++];
            if (num === 0) {
                return false;
            }
            while (index2 < abbr.length && isDigit(abbr.charCodeAt(index2))) {
                num = num * 10 + (+abbr[index2++]);
            }

            index1 += num;
        } else {
            if (word[index1] !== abbr[index2]) {
                return false;
            }
            index1++;
            index2++;
        }
    }
    return index1 === word.length && index2 === abbr.length;
};

function isDigit (code) {
    return code > 47 && code < 58;
}
