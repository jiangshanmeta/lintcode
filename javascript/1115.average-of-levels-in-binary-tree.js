/**
 * @param root: the binary tree of the  root
 * @return: return a list of double
 */
const averageOfLevels = function (root) {
    const result = [];
    function levelOrder(lastLevel,result){
        let sum = 0;
        const nextLevel = [];
        for(let i=0;i<lastLevel.length;i++){
            const node = lastLevel[i];
            sum += node.val;
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        result.push(sum/lastLevel.length);
        nextLevel.length && levelOrder(nextLevel,result);
    }
    root && levelOrder([root],result);
    return result;
}