/**
 * @param num: an integer
 * @return: the complement number
 */
const findComplement = function (num) {
    let num2 = num;
    let count = 0;
    while (num2) {
        count++;
        num2 >>= 1;
    }

    return num ^ ((1 << count) - 1);
};
