/**
 * @param num1: a non-negative integers
 * @param num2: a non-negative integers
 * @return: return sum of num1 and num2
 */
const addStrings = function (num1, num2) {
    let carry = 0;
    const result = [];
    let index1 = num1.length - 1;
    let index2 = num2.length - 1;
    while (index1 > -1 && index2 > -1) {
        const sum = carry + (+num1[index1--]) + (+num2[index2--]);
        const digit = sum % 10;
        carry = (sum - digit) / 10;
        result.push(digit);
    }
    while (index1 > -1) {
        const sum = carry + (+num1[index1--]);
        const digit = sum % 10;
        carry = (sum - digit) / 10;
        result.push(digit);
    }
    while (index2 > -1) {
        const sum = carry + (+num2[index2--]);
        const digit = sum % 10;
        carry = (sum - digit) / 10;
        result.push(digit);
    }
    carry && result.push(carry);
    return result.reverse().join('');
};
