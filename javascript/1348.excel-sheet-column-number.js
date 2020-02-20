/**
 * @param s: a string
 * @return: return a integer
 */
const titleToNumber = function (s) {
    let result = 0;
    for(let i=0;i<s.length;i++){
        result = result*26+s.charCodeAt(i)-64;
    }
    return result;
}

