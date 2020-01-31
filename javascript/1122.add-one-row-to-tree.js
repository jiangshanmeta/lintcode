/**
 * @param root: the root of binary tree
 * @param v: a integer
 * @param d: a integer
 * @return: return a TreeNode
 */
const addOneRow = function (root, v, d) {
    if(d === 1){
        const node = new TreeNode(v);
        node.left = root;
        return node;
    }
    let lastRow = [root];
    while( (--d)>1 ){
        const nextRow = [];
        for(let i=0;i<lastRow.length;i++){
            lastRow[i].left && nextRow.push(lastRow[i].left);
            lastRow[i].right && nextRow.push(lastRow[i].right);
        }
        lastRow = nextRow;
    }
    for(let i=0;i<lastRow.length;i++){
        const newLeft = new TreeNode(v);
        const newRight = new TreeNode(v);
        newLeft.left = lastRow[i].left;
        newRight.right = lastRow[i].right;
        lastRow[i].left = newLeft;
        lastRow[i].right = newRight;
    }
    return root;
}

