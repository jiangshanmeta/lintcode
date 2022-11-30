export class Solution {
    /**
     * @param a: The array A.
     * @return: The array of the squares.
     */
    squareArray(a: number[]): number[] {
      let right = a.length;
      let low = 0;
      let high = a.length-1;
      while(low<=high){
        const mid = low + ((high-low)>>1);
        if(a[mid]<0){
          low = mid+1;
        }else{
          right = Math.min(right,mid);
          high = mid-1;
        }
      }
      let left = right-1;
      const result:number[] = [];
      while(left>-1 && right<a.length){
        if(-a[left]>a[right]){
          result.push(a[right++]**2)
        }else{
          result.push(a[left--]**2)
        }
        
      }
      while(left>-1){
        result.push(a[left--]**2);
      }
      while(right<a.length){
        result.push(a[right++]**2)
      }
      return result;
    }
  }