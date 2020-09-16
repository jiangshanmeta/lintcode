/**
 * @param n: a postive Integer
 * @return: if two adjacent bits will always have different values
 */
const hasAlternatingBits = function (n) {
    // 对于交替位的二进制数 右移 再和原数字做xor 得到的数字所有位均为1 即2^n -1
    // 于是转换成了如何判断一个数是否是2的幂次
    n = n ^ (n >> 1);
    return (n & (n + 1)) === 0;
};
