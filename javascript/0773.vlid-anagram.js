/**
 * @param s: string s
 * @param t: string t
 * @return: Given two strings s and t, write a function to determine if t is an anagram of s.
 */
const isAnagram = function (s, t) {
    if(s.length !== t.length){
        return false;
    }
    const counts = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]++;
        counts[t.charCodeAt(i)-97]--;
    }
    
    return counts.every(item=>item===0);
}

