/**
 * @param s: a string
 * @return: return a boolean
 */
const repeatedSubstringPattern = function (s) {
    let index = 1;
    while(index<s.length){
        while(index<s.length && s[index] !== s[0]){
            index++;
        }
        if(index === s.length){
            return false;
        }

        if(s.length%index === 0 && s === s.substring(0,index).repeat(s.length/index)){
            return true;
        }
        index++;
    }
    return false;
}
