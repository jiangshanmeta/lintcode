/**
 * @param s: a string
 * @return: whether the student could be rewarded according to his attendance record
 */
const checkRecord = function (s) {
    let ACount = 0;
    let LCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            ACount++;
            LCount = 0;
            if (ACount > 1) {
                return false;
            }
        } else if (s[i] === 'L') {
            LCount++;
            if (LCount > 2) {
                return false;
            }
        } else {
            LCount = 0;
        }
    }
    return true;
};
