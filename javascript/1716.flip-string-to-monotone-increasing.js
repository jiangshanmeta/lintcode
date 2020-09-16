/**
 * @param S: a string
 * @return: the minimum number
 */
const minFlipsMonoIncr = function (S) {
    // dp1[i+1] i换成0需要的最小费用
    const dp1 = new Array(S.length + 1).fill(0);
    // dp2[i+1] i换成1需要的最小费用
    const dp2 = new Array(S.length + 1).fill(0);
    for (let i = 0; i < S.length; i++) {
        dp1[i + 1] = dp1[i] + (S[i] === '0' ? 0 : 1);
        dp2[i + 1] = Math.min(
            dp1[i],
            dp2[i]
        ) + (S[i] === '1' ? 0 : 1);
    }
    return Math.min(dp1[dp1.length - 1], dp2[dp2.length - 1]);
};
