/**
 * @param s: the given string
 * @return: whether this string is valid
 */
const checkValidString = function (s) {
    const stack1 = [];
    const stack2 = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === ')'){
            // 右括号找匹配的
            // 有限匹配左括号
            while(stack1.length && stack1[stack1.length-1] !== '('){
                stack2.push(stack1.pop());
            }
            if(stack1.length){
                stack1.pop();
            }else if(stack2.length){
                // 没有左括号用星号替代
                stack2.pop();
            }else{
                // 左括号和星号都没有
                return false;
            }
            while(stack2.length){
                stack1.push(stack2.pop());
            }
            
        }else{
            // 左括号和星号压入栈1
            stack1.push(s[i]);
        }
    }
    let starCount = 0;
    while(stack1.length){
        const node = stack1.pop();
        if(node === '*'){
            starCount++;
        }else if(starCount>0){
            starCount--;
        }else{
            return false;
        }
        
    }
    return true;
}
