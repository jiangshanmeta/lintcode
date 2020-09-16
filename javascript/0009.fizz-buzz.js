/**
 * @param n: An integer
 * @return: A list of strings.
 */
const fizzBuzz = function (n) {
    const result = [];
    for (let i = 1; i < n + 1; i++) {
        const mod3 = i % 3 === 0;
        const mod5 = i % 5 === 0;
        if (mod3 && mod5) {
            result.push('fizz buzz');
        } else if (mod3) {
            result.push('fizz');
        } else if (mod5) {
            result.push('buzz');
        } else {
            result.push('' + i);
        }
    }
    return result;
};
