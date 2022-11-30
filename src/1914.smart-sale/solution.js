export class Solution {
    /**
     * @param ids: ID number of items
     * @param m: The largest number of items that can be remove
     * @return: the result of the min item
     */
    minItem(ids, m) {
      const map = new Map();
      for(const id of ids){
        if(map.has(id)){
          map.set(id,map.get(id)+1)
        }else{
          map.set(id,1);
        }
      }
      const entries = [...map.entries()].sort((a,b)=>b[1]-a[1]);
      while(m>0 && entries.length>0){
        if(entries[entries.length-1][1]>m){
          m = 0;
        }else{
          m -= entries[entries.length-1][1];
          entries.pop()
        }
      }
  
      return entries.length;
    }
  }