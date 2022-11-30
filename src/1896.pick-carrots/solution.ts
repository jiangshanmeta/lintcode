export class Solution {
    /**
     * @param carrot: an integer matrix
     * @return: Return the number of steps that can be moved.
     */
    pickCarrots(carrot: number[][]): number {
      let result = 0;
      const M = carrot.length;
      const N = carrot[0].length;
      const deltas = [
        [0,1],
        [0,-1],
        [-1,0],
        [1,0]
      ]
      const getNum = (i:number,j:number)=>{
        if(i<0 || j<0 || i === M || j === N){
          return 0;
        }
        return carrot[i][j]
      }
      let x = (M-1)>>1;
      let y = (N-1)>>1;
      while(true){
        result += carrot[x][y];
        carrot[x][y] = 0;
  
        let maxNext = 0;
        let nextIndex = 0;
        deltas.forEach(([dx,dy],index)=>{
          const nextNum = getNum(x+dx,y+dy);
          if(nextNum>maxNext){
            maxNext = nextNum
            nextIndex = index;
          }
        })
  
        if(maxNext === 0){
          break;
        }else{
          x += deltas[nextIndex][0];
          y += deltas[nextIndex][1];
        }
      }
      
      return result
    }
  }