/**
 * @param N:
 * @return: return true or false
 */
const reorderedPowerOf2 = function (N) {
    let power = 1;
    const candidate = [];
    const maxPower = Math.pow(10, 9);
    while (power < maxPower) {
        // 2的幂转化为字符串 并案字符排序 便于对比
        candidate.push(power.toString().split('').sort().join(''));
        power *= 2;
    }

    return candidate.includes(N.toString().split('').sort().join(''));
};
