/**
 * @param s: a string
 * @return: the number of segments in a string
 */
const countSegments = function (s) {
    let count = 0;
    let index = 0;
    while(index<s.length && s[index] === ' '){
        index++;
    }

    while(index<s.length){
        while(index<s.length && s[index] !== ' '){
            index++;
        }
        while(index<s.length && s[index] === ' '){
            index++;
        }
        count++;
    }
    return count;
}
