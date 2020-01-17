/**
 * @param ops: the list of operations
 * @return:  the sum of the points you could get in all the rounds
 */
const calPoints = function (ops) {
    const stack = [];
    let sum = 0;
    for(let i=0;i<ops.length;i++){
        if(ops[i] === '+'){
            const num = stack[stack.length-1] + stack[stack.length-2];
            stack.push(num);
            sum += num;
        }else if(ops[i] === 'D'){
            const num = stack[stack.length-1]*2;
            stack.push(num);
            sum += num;
        }else if(ops[i] === 'C'){
            sum -= stack.pop();
        }else{
            const num = +ops[i];
            stack.push(num);
            sum += num;
        }
    }
    return sum;
}

