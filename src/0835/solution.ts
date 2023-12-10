function count1 (n:number) {
    let c = 0;
    while (n) {
        c++;
        n = n & (n - 1);
    }
    return c;
}

export class Solution {
    /**
     * @param x: an integer
     * @param y: an integer
     * @return: return an integer, denote the Hamming Distance between two integers
     */
    hammingDistance (x: number, y: number): number {
        return count1(x ^ y);
    }
}
