/**
 * @param flowerbed: an array
 * @param n: an Integer
 * @return: if n new flowers can be planted in it without violating the no-adjacent-flowers rule
 */
const canPlaceFlowers = function (flowerbed, n) {
    flowerbed.push(0,1);
    let result = 0;
    let index = 0;
    let count = 0;
    while(index<flowerbed.length && flowerbed[index] === 0){
        count++;
        index++;
    }
    if(count>0){
        result += (count >> 1);
    }
    while(index<flowerbed.length){
        count = 0;
        index++;
        while(index<flowerbed.length && flowerbed[index] === 0){
            count++;
            index++;
        }
        if(count>0){
            result += ((count-1)>>1);
        }
    }
    
    
    
    
    return result >= n;
}

