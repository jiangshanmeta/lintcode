/**
 * @param s: A string
 * @return: the length of last word
 */
const lengthOfLastWord = function (s) {
    let index1 = s.length-1;
    while(index1>-1 && s[index1] === ' '){
        index1--;
    }
    if(index1 === -1){
        return 0;
    }
    let index2 = index1-1;
    while(index2>-1 && s[index2] !== ' '){
        index2--;
    }

    return index1-index2;
}