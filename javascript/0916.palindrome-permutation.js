/**
 * @param s: the given string
 * @return: if a permutation of the string could form a palindrome
 */
const canPermutePalindrome = function (s) {
    const countBy = {};
    const keys = [];
    for(let i=0;i<s.length;i++){
        if(countBy[s[i]] === undefined){
            keys.push(s[i]);
            countBy[s[i]] = 1;
        }else{
            countBy[s[i]]++;
        }
    }
    let hasOdd = false;
    for(let i=0;i<keys.length;i++){
        if(countBy[keys[i]] & 1){
            if(hasOdd){
                return false;
            }
            hasOdd = true;
        }
    }
    return true;
}