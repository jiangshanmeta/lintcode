/**
 * @param root: the root of the given tree
 * @return: the values of the nodes you can see ordered from top to bottom
 */
const rightSideView = function (root) {
    const result = [];
    function dfs(node,depth,result){
        if(depth === result.length){
            result.push(node.val);
        }
        depth++;
        node.right && dfs(node.right,depth,result);
        node.left && dfs(node.left,depth,result);
    }
    root && dfs(root,0,result);
    return result;
}