export class Solution {
    add (a:number, b:number) {
        let res = a;
        while (b !== 0) {
            res = a ^ b;
            b = (a & b) << 1;
            a = res;
        }
        return res;
    }

    neg (a:number) {
        return this.add(~a, 1);
    }

    minus (a: number, b: number): number {
        return this.add(a, this.neg(b));
    }

    _divide (a:number, b:number) {
        let x = a < 0 ? this.neg(a) : a;
        const y = b < 0 ? this.neg(b) : b;
        let res = 0;
        for (let i = 30; i >= 0; i = this.minus(i, 1)) {
            if ((x >> i) >= y) {
                res |= (1 << i);
                x = this.minus(x, y << i);
            }
        }

        return (a < 0 ? 0 : 1) ^ (b < 0 ? 0 : 1) ? this.neg(res) : res;
    }

    /**
   * @param dividend: the dividend
   * @param divisor: the divisor
   * @return: the result
   */
    divide (a: number, b: number): number {
        const MIN = -2147483648;
        if (a === MIN && b === MIN) {
            return 1;
        }
        if (a === MIN && b === -1) {
            return 2147483647;
        }
        if (a !== MIN && b !== MIN) {
            return this._divide(a, b);
        }
        if (b === MIN) {
            return 0;
        }

        a = this.add(a, b > 0 ? b : this.neg(b));
        const res = this._divide(a, b);
        const offset = b > 0 ? -1 : 1;
        return this.add(res, offset);
    }
}
