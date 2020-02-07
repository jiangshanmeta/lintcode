/**
 * @param root: a root of integer
 * @return: return a list of integer
 */
const largestValues = function (root) {
    const result = [];
    function levelOrder(lastLevel,result){
        let max = -Infinity;
        const nextLevel = [];
        for(let i=0;i<lastLevel.length;i++){
            const node = lastLevel[i];
            max = Math.max(max,node.val);
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        result.push(max);
        nextLevel.length && levelOrder(nextLevel,result);
    }
    root && levelOrder([root],result);
    return result;
}