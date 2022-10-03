/**
 * @param digits: a number represented as an array of digits
 * @return: the result
 */
const plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i > -1; i--) {
        const sum = digits[i] + carry;
        const digit = sum % 10;
        carry = (sum - digit) / 10;
        digits[i] = digit;
    }
    carry && digits.unshift(carry);

    return digits;
};
