/**
 * @param s: the string
 * @param k: the integer k
 * @return: the answer
 */
const reverseStringII = function (s, k) {
    const result = [];
    let index = 0;
    while(index<s.length){
        const start = index;
        index = Math.min(index+k-1,s.length-1);
        while(index>start-1){
            result.push(s[index--]);
        }
        index += k+1;
        const end = index+k;
        while(index<s.length && index<end){
            result.push(s[index++]);
        }
    }
    return result.join('');
}

