/**
 * @param root: the given tree
 * @return: the binary tree in an m*n 2D string array
 */
const printTree = function (root) {
    const H = getHeight(root);
    const L = Math.pow(2,H)-1;
    const result = [];
    for(let i=0;i<H;i++){
        result.push(new Array(L).fill(""));
    }
    fill(result,0,L>>1,root,Math.pow(2,H-2));
    return result;
}

function fill(result,x,y,root,diff){
    result[x][y] = ''+root.val;
    root.left && fill(result,x+1,y-diff,root.left,diff/2);
    root.right && fill(result,x+1,y+diff,root.right,diff/2);
}

function getHeight(root){
    if(!root){
        return 0;
    }
    return Math.max(getHeight(root.left),getHeight(root.right))+1;
}