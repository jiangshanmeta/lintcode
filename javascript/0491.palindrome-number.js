/**
 * @param num: a positive number
 * @return: true if it's a palindrome or false
 */
const isPalindrome = function (num) {
    num = '' + num;
    let left = 0;
    let right = num.length - 1;
    while (left < right) {
        if (num[left] !== num[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
