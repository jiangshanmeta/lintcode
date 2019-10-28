/**
 * @param numbers: Give an array numbers of n integer
 * @param target: An integer
 * @return: return the sum of the three integers, the sum closest target.
 */
const threeSumClosest = function (numbers, target) {
    numbers.sort((a,b)=>a-b);
    let minDiff = Infinity;
    let closestVal = null;
    let index1 = 0;
    while(index1<numbers.length-2){
        let index2 = index1+1;
        let index3 = numbers.length-1;
        while(index2<index3){
            const sum = numbers[index1]+numbers[index2]+numbers[index3];
            if(sum === target){
                return sum
            }else if(sum>target){
                const diff = sum-target;
                if(diff<minDiff){
                    minDiff = diff;
                    closestVal = sum;
                }
                const val3 = numbers[index3--];
                while(index2<index3 && numbers[index3] === val3){
                    index3--;                    
                }

            }else{
                const diff = target-sum;
                if(diff<minDiff){
                    minDiff = diff;
                    closestVal = sum
                }
                const val2 = numbers[index2++];
                while(index2<index3 && numbers[index2] === val2){
                    index2++
                }
            }
        }
        const val1 = numbers[index1];
        while(index1<numbers.length-2 && numbers[index1] === val1){
            index1++;
        }
    }
    return closestVal;
}

