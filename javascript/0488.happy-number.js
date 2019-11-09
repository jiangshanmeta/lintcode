/**
 * @param n: An integer
 * @return: true if this is a happy number or false
 */
const isHappy = function (n) {
    const map = {};
    map[n] = true;
    while (n !== 1){
        let newNum = 0;
        while(n){
            const digit = n%10;
            newNum += digit*digit;
            n = (n-digit)/10;
        }
        console.log(newNum)
        if(map[newNum]){
            return false;
        }
        map[newNum] = true;
        n = newNum;
    }
    return true;
}

