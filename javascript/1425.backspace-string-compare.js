/**
 * @param S: string S
 * @param T: string T
 * @return: Backspace String Compare
 */
const backspaceCompare = function (S, T) {
    const stack1 = [];
    const stack2 = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            stack1.pop();
        } else {
            stack1.push(S[i]);
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            stack2.pop();
        } else {
            stack2.push(T[i]);
        }
    }
    if (stack1.length !== stack2.length) {
        return false;
    }
    for (let i = 0; i < stack1.length; i++) {
        if (stack1[i] !== stack2[i]) {
            return false;
        }
    }
    return true;
};
