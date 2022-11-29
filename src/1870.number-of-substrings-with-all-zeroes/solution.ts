export class Solution {
    /**
     * @param str: the string
     * @return: the number of substrings 
     */
    stringCount(str: string): number {
      let result = 0;
      let index = 0;
      while(index<str.length){
        if(str[index++] === '1'){
          continue;
        }
        let count = 1;
        while(index<str.length && str[index] === '0'){
          index++;
          count++;
        }
  
        result += count*(count+1)/2;
      }
      return result;
    }
  }