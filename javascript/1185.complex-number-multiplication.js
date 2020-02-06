/**
 * @param a: a string
 * @param b: a string
 * @return: a string representing their multiplication
 */
const complexNumberMultiply = function (a, b) {
    const [a1,b1] = parse(a)
    const [a2,b2] = parse(b);
    return `${a1*a2-b1*b2}+${a1*b2+a2*b1}i`
}

function parse(str){
    const plueIndex = str.indexOf('+');
    return [+str.substring(0,plueIndex),+str.slice(plueIndex+1,-1)];
}