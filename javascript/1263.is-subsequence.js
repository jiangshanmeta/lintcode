/**
 * @param s: the given string s
 * @param t: the given string t
 * @return: check if s is subsequence of t
 */
const isSubsequence = function (s, t) {
    let index1 = 0;
    let index2 = 0;

    while(index1<s.length && index2<t.length){
        if(s[index1] === t[index2]){
            index1++;
        }
        index2++;
    }
    return index1 === s.length;
}
