export class Solution {
    /**
     * @param a: A number
     * @return: Returns the maximum number after insertion
     */
    insertFive(a: number): number {
      const list = String(a).split('');
      if(a<0){
        for(let i=1;i<list.length;i++){
          if(+list[i]>5){
            list.splice(i,0,'5')
            return +list.join('')
          }
          
        }
        return a*10-5;
      }else{
      for(let i=0;i<list.length;i++){
        if(+list[i]<5){
          list.splice(i,0,'5');
          return +list.join('')
        }
      }
      return a*10+5;
      }
  
  
    }
  }