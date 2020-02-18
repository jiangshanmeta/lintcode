/**
 * @param n: a integer
 * @return: return a integer
 */
const countPrimes = function (n) {
    const list = new Array(n).fill(true);
    let count = 0;
    for(let i=2;i<n;i++){
        if(list[i]){
            count++;
            let j = i*2;
            while(j<n){
                list[j] = false;
                j += i;
            }
        }
    }
    return count;
}

