/**
 * @param n: an integer
 * @return: whether you can win the game given the number of stones in the heap
 */
const canWinNim = function (n) {
    // 第一眼看过去是动态规划 F(n) = !F(n-1) || !F(n-1) || !F(n-3) F(1) = true F(2) = true F(3) = true
    // 但是可以观察到四个一组进行循环 前三个是true 第四个是false
    return n%4 !== 0;
}
