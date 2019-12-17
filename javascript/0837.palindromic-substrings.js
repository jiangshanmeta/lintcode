/**
 * @param str: s string
 * @return: return an integer, denote the number of the palindromic substrings
 */
const countPalindromicSubstrings = function (str) {
    let count = 0;
    for(let i=0;i<str.length;i++){
        count++;
        let left = i-1;
        let right = i+1;
        while(left>-1 && right<str.length && str[left] === str[right]){
            count++;
            left--;
            right++;
        }
        left = i;
        right = i+1;
        while(left>-1 && right<str.length && str[left] === str[right]){
            count++;
            left--;
            right++;
        }
    }
    return count;
}

