/**
 * @param numbers: Give an array
 * @param target: An integer
 * @return: Find all unique quadruplets in the array which gives the sum of zero
 */
const fourSum = function (numbers, target) {
    const result = [];
    numbers.sort((a,b)=>a-b);
    let index1 = 0;
    while(index1<numbers.length-3){
        let index2 = index1+1;
        while(index2<numbers.length-2){
            let index3 = index2+1;
            let index4 = numbers.length-1;
            while(index3<index4){
                const sum = numbers[index1]+numbers[index2]+numbers[index3]+numbers[index4];
                if(sum>target){
                    index4--;
                }else if(sum<target){
                    index3++;
                }else{
                    result.push([numbers[index1],numbers[index2],numbers[index3],numbers[index4]]);
                    const val3 = numbers[index3++];
                    const val4 = numbers[index4--];
                    while(index3<index4 && numbers[index3] === val3){
                        index3++;
                    }
                    while(inde3<index4 && numbers[index4] === val4){
                        index4--;
                    }
                }
            }
            const val2 = numbers[index2++];
            while(index2<numbers.length-2 && numbers[index2] === val2){
                index2++;
            }
        }
        const val1 = numbers[index1++];
        while(index1<numbers.length-3 && numbers[index1] === val1){
            index1++;
        }
    }
    return result;
}

