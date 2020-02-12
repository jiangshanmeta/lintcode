/**
 * @param num: an integer
 * @return: convert the integer to hexadecimal
 */
const toHex = function (num) {
    if(num === 0){
        return '0';
    }
    num >>>= 0;
    const map = {
        10:'a',
        11:'b',
        12:'c',
        13:'d',
        14:'e',
        15:'f',
    };
    const stack = [];
    while(num){
        const digit = num%16;
        stack.push(digit<10?digit:map[digit]);
        num = (num-digit)/16;
    }
    return stack.reverse().join('');
}

