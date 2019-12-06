/**
 * @param s: the original string
 * @return: the string without arbitrary spaces
 */
const removeExtra = function (s) {
    const result = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === ' '){
            if(result.length && result[result.length-1] !== ' '){
                result.push(s[i]);
            }
        }else{
            result.push(s[i]);
        }
    }

    if(result[result.length-1] === ' '){
        result.pop();
    }

    return result.join('');
}
