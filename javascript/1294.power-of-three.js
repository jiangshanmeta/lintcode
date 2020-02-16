/**
 * @param n: an integer
 * @return: if n is a power of three
 */
const isPowerOfThree = function (n) {
    // 3**19 是32位有符号数能取到的3的幂的最大值
    return n>0 && Math.pow(3,19)%n === 0;
}

