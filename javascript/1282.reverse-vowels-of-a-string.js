/**
 * @param s: a string
 * @return: reverse only the vowels of a string
 */
const reverseVowels = function (s) {
    const list = s.split('');
    let index1 = 0;
    let index2 = list.length - 1;
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

    while (index1 < index2) {
        while (index1 < index2 && !vowelMap[s[index1]]) {
            index1++;
        }
        while (index1 < index2 && !vowelMap[s[index2]]) {
            index2--;
        }
        if (index1 < index2) {
            const tmp = list[index1];
            list[index1] = list[index2];
            list[index2] = tmp;
            index1++;
            index2--;
        }
    }
    return list.join('');
};
