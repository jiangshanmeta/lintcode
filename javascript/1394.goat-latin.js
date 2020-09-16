/**
 * @param S:
 * @return:
 */
const toGoatLatin = function (S) {
    const list = S.split(' ');
    const result = [];
    let trail = 'a';
    const vowelMap = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    };
    for (let i = 0; i < list.length; i++) {
        const word = list[i];
        if (vowelMap[word[0]]) {
            console.log(word);
            result.push(`${word}ma${trail}`);
        } else {
            result.push(`${word.substring(1)}${word[0]}ma${trail}`);
        }
        trail += 'a';
    }

    return result.join(' ');
};
