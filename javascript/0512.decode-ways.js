/**
 * @param s: a string,  encoded message
 * @return: an integer, the number of ways decoding
 */
const numDecodings = function (s) {
    if (s.length === 0) {
        return 0;
    }

    const dp = new Array(s.length).fill(0);
    dp[0] = s[0] === '0' ? 0 : 1;
    for (let i = 1; i < dp.length; i++) {
        if (s[i] !== '0') {
            dp[i] += dp[i - 1];
        }
        if (s[i - 1] !== '0' && +s.substring(i - 1, i + 1) < 27) {
            dp[i] += (i > 1 ? dp[i - 2] : 1);
        }
    }
    return dp[s.length - 1];
};
