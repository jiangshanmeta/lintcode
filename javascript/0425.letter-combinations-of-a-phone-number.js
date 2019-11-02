/**
 * @param digits: A digital string
 * @return: all posible letter combinations
 */
const letterCombinations = function (digits) {
    const map = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z'],
    };
    const result = [];
    digits && helper(digits,0,[],map,result);
    return result;
}

function helper(digits,index,list,map,result){
    if(index === digits.length){
        result.push(list.join(''));
        return;
    }
    const candidate = map[digits[index]];
    for(let i=0;i<candidate.length;i++){
        list.push(candidate[i]);
        helper(digits,index+1,list,map,result);
        list.pop();
    }

}