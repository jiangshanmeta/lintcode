/**
 * @param n: an integer
 * @return: 1 - n in lexicographical order
 */
const lexicalOrder = function (n) {
    const result = [];
    const stack = [];
    for(let i=Math.min(9,n);i>0;i--){
        stack.push(i);
    }

    while(stack.length){
        let node = stack.pop();
        result.push(node);
        node *= 10;
        for(let i=9;i>-1;i--){
            node+i<=n && stack.push(node+i);
        }
    }

    return result;
}
