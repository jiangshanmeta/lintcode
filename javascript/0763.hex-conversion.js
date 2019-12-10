/**
 * @param n: a decimal number
 * @param k: a Integer represent base-k
 * @return: a base-k number
 */
const hexConversion = function (n, k) {
    if(n === 0){
        return "0";
    }

    const map = {
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F',
    };
    const result = [];
    while(n){
        const digit = n%k;
        result.push(digit>9?map[digit]:digit);
        n = (n-digit)/k;
    }
    return result.reverse().join('');
}

