export class Calculator {
    /**
     * @param a: An integer
     * @param op: A character, +, -, *, /.
     * @param b: An integer
     * @return: The result
     */
    calculate (a: number, op: string, b: number): number {
        if (op === '+') {
            return a + b;
        } else if (op === '-') {
            return a - b;
        } else if (op === '*') {
            return a * b;
        } else {
            return Math.trunc(a / b);
        }
    }
}
