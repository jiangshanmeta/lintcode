/**
 * @param s: a string
 * @return: it's index
 */
const firstUniqChar = function (s) {
    const charCountMap = {};
    for(let i=0;i<s.length;i++){
        if(charCountMap[s[i]] === undefined){
            charCountMap[s[i]] = 1;
        }else{
            charCountMap[s[i]] = 2;
        }
    }
    for(let i=0;i<s.length;i++){
        if(charCountMap[s[i]] === 1){
            return i;
        }
    }
    return -1;
}

