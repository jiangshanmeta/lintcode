export class Solution {
    /**
     * @param operation: A list of operations.
     * @return: The lamp has the longest liighting time.
     */
    longestLightingTime(operation: number[][]): string {
      const lights = new Array<number>(26).fill(0);
      let current = 0;
      for(const [light,time] of operation){
        const cost = Math.max(0,time-current)
        current = Math.max(time,current);
        lights[light] = Math.max(lights[light],cost)
      }
      let maxId = 0;
      let count = lights[0];
      for(let i=1;i<26;i++){
        if(lights[i]>count){
          count = lights[i];
          maxId = i;
        }
      }
      return String.fromCharCode(maxId+97)
    }
  }