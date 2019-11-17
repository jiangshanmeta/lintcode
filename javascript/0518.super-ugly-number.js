/**
 * @param n: a positive integer
 * @param primes: the given prime list
 * @return: the nth super ugly number
 */
const nthSuperUglyNumber = function (n, primes) {
    const sequence = [1];
    const indexs = new Array(primes.length).fill(0);
    while(sequence.length<n){
        const newNum = Math.min(...indexs.map((index,i)=>sequence[index]*primes[i]));
        sequence.push(newNum);
        for(let i=0;i<indexs.length;i++){
            while(sequence[indexs[i]]*primes[i]<=newNum){
                indexs[i]++;
            }
        }
    }
    return sequence[n-1];
}

