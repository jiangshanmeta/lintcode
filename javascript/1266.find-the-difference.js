/**
 * @param s: a string
 * @param t: a string
 * @return: the letter that was added in t
 */
const findTheDifference = function (s, t) {
    const counts = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]--;
        counts[t.charCodeAt(i)-97]++;
    }
    counts[t.charCodeAt(t.length-1)-97]++;
    for(let i=0;i<26;i++){
        if(counts[i]){
            return String.fromCharCode(i+97);
        }
    }
}
