/**
 * @param s: a string
 * @return: return a string
 */
const removeDuplicateLetters = function (s) {
    const counts = new Array(26).fill(0);
    const visited = new Array(26).fill(false);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const code = c.charCodeAt(0) - 97;
        if (!visited[code]) {
            while (stack.length && c < stack[stack.length - 1] && counts[stack[stack.length - 1].charCodeAt(0) - 97]) {
                const code2 = stack.pop().charCodeAt(0) - 97;
                visited[code2] = false;
            }
            visited[code] = true;
            stack.push(c);
        }
        counts[code]--;
    }

    return stack.join('');
};
