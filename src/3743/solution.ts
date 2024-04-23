
const MAX = 2 ** 31;
// function check1(digit:number,k:number){
//   let n = digit;
//   while(n<MAX){
//     if(n%k === 0){
//       return n;
//     }
//     n = n*10+digit
//   }
//   return -1;
// }

export class Solution {
    /**
   * @param k: An integer
   * @param digit1: An integer
   * @param digit2: An integer
   * @return: The smallest multiple of k consisting only of digit1 and digit2
   */
    findInteger (k: number, digit1: number, digit2: number): number {
        if (digit1 === 0 && digit2 === 0) {
            return -1;
        }
        // if(digit1 === 0){
        //   return check1(digit2,k)
        // }
        // if(digit2 === 0){
        //   return check1(digit1,k)
        // }
        if (digit1 > digit2) {
            digit1 ^= digit2;
            digit2 ^= digit1;
            digit1 ^= digit2;
        }
        let seq = [digit1, digit2, ];
        while (true) {
            const ns:number[] = [];
            for (const n of seq) {
                if (n >= MAX) {
                    return -1;
                }
                if (n > 0 && n % k === 0) {
                    return n;
                }
                ns.push(10 * n + digit1);
                ns.push(10 * n + digit2);
            }
            seq = ns;
        }
    }
}
