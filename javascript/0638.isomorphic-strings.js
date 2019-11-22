/**
 * @param s: a string
 * @param t: a string
 * @return: true if the characters in s can be replaced to get t or false
 */
const isIsomorphic = function (s, t) {
    if(s.length !== t.length){
        return false;
    }
    const s2t = {};
    const t2s = {};
    for(let i=0;i<s.length;i++){
        if(s2t[s[i]] === undefined && t2s[t[i]] === undefined){
            s2t[s[i]] = t[i];
            t2s[t[i]] = s[i];
            continue;
        }else if (s2t[s[i]] === t[i] && t2s[t[i]] === s[i]){
            continue;
        }
        return false;
    }
    return true;
}

