export class Solution {
    /**
     * @param time: a string of Time
     * @return: The MaximumMoment
     */
    maximumMoment(time: string): string {
      const timeList = time.split('');
  
      if(timeList[0] === '?' && timeList[1] === '?'){
        timeList[0] = '2';
        timeList[1] = '3'
      }else if(timeList[1] === '?'){
        if(timeList[0] === '2'){
          timeList[1] = '3'
        }else{
          timeList[1] = '9'
        }
      }else if(timeList[0] === '?'){
        if(+timeList[1]>3){
          timeList[0] = '1'
        }else{
          timeList[0] = '2'
        }
      }
  
      if(timeList[3] === '?'){
        timeList[3] = '5'
      }
  
      if(timeList[4] === '?'){
        timeList[4] = '9'
      }
      
      return timeList.join('')
    }
  }