/**
 * @param s: a string
 * @return: whether you can make s a palindrome by deleting at most one character 
 */
const validPalindrome = function (s) {
    return helper(s,0,s.length-1,true);
}

function helper(s,left,right,canDelete){
    while(left<right){
        if(s[left] === s[right]){
            left++;
            right--;
        }else if(canDelete){
            return helper(s,left+1,right,false) || helper(s,left,right-1,false);
        }else{
            return false;
        }
    }
    return true;
}