/**
 * @param s1: the 1st string
 * @param s2: the 2nd string
 * @return: uncommon characters of given strings
 */
const concatenetedString = function (s1, s2) {
    const map1 = {};
    const map2 = {};
    for(let i=0;i<s2.length;i++){
        map2[s2[i]] = true;
    }
    const result = [];
    for(let i=0;i<s1.length;i++){
        if(!map2[s1[i]]){
            result.push(s1[i]);
        }
        map1[s1[i]] = true;
    }
    for(let i=0;i<s2.length;i++){
        if(!map1[s2[i]]){
            result.push(s2[i]);
        }
    }

    return result.join('');
}
