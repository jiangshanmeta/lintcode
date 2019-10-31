/**
 * @param a: a number
 * @param b: a number
 * @return: the result
 */
const addBinary = function (a, b) {
    const result = [];
    let index1 = a.length-1;
    let index2 = b.length-1;
    let carry = 0;
    while(index1>-1 && index2>-1){
        const sum = carry+(+a[index1--])+(+b[index2--]);
        const digit = sum%2;
        carry = (sum-digit)/2;
        result.push(digit);
    }

    while(index1>-1){
        const sum = carry+(+a[index1--]);
        const digit = sum%2;
        carry = (sum-digit)/2;
        result.push(digit);
    }

    while(index2>-1){
        const sum = carry+(+b[index2--]);
        const digit = sum%2;
        carry = (sum-digit)/2;
        result.push(digit);
    }

    carry && result.push(carry);
    
    return result.reverse().join('');
}

