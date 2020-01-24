/**
 * @param n: The integer
 * @return: Roman representation
 */
const threeMap = {
    1:'C',
    2:'CC',
    3:'CCC',
    4:'CD',
    5:'D',
    6:'DC',
    7:'DCC',
    8:'DCCC',
    9:'CM',
}

const twoMap = {
    1:'X',
    2:'XX',
    3:'XXX',
    4:'XL',
    5:'L',
    6:'LX',
    7:'LXX',
    8:'LXXX',
    9:'XC',
}

const oneMap = {
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    6:'VI',
    7:'VII',
    8:'VIII',
    9:'IX',
};
 
 
const intToRoman = function (n) {
    const result = [];
    if(n>999){
        const rest = n%1000;
        const digit = (n-rest)/1000;
        for(let i=0;i<digit;i++){
            result.push('M');
        }
        n = rest;
    }
    if(n>99){
        const rest = n%100;
        const digit = (n-rest)/100;
        result.push(threeMap[digit]);
        n = rest;
    }
    if(n>9){
        const rest = n%10;
        const digit = (n-rest)/10;
        result.push(twoMap[digit]);
        n = rest;
    }
    if(n>0){
        result.push(oneMap[n]);
    }
    
    
    
    return result.join('');
}
