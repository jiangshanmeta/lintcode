export class Solution {
    /**
     * @param n: length of good nums
     * @return: The num of good nums of length n
     */
    rotatedNums(n: number): number {
      let result = 1;
      if(n>1){
        result *= 6
        n -=2;
      }
      return result*(n&1?5:1)*(7**(n>>1))
    }
  }