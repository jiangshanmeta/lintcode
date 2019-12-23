/**
 * @param n: n pairs
 * @return: All combinations of well-formed parentheses
 */
const generateParenthesis = function (n) {
    const result = [];
    backTracking(n,n,[],result)
    
    return result;
}

function backTracking(restLeft,restRight,sequence,result){
    if(restLeft === 0 && restRight === 0){
        result.push(sequence.join(''));
        return;
    }

    if(restLeft>0){
        sequence.push('(');
        backTracking(restLeft-1,restRight,sequence,result);
        sequence.pop();
    }
    
    if(restRight>restLeft){
        sequence.push(')');
        backTracking(restLeft,restRight-1,sequence,result);
        sequence.pop();
    }
    
}
