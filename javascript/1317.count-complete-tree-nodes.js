/**
 * @param root: root of complete binary tree
 * @return: the number of nodes
 */
const countNodes = function (root) {
    if(!root){
        return 0;
    }
    let count = 0;
    let h1 = 0;
    let h2 = 0;
    let h3 = 0;
    let h4 = 0;
    let node = root.left;
    while(node){
        h1++;
        node = node.left;
    }
    node = root.right;
    while(node){
        h4++;
        node = node.right;
    }
    while(h1 !== h4){
        h2 = 0;
        h3 = 0;
        node = root.left;
        while(node){
            h2++;
            node = node.right;
        }
        node = root.right;
        while(node){
            h3++;
            node = node.left;
        }
        if(h1 !== h2){
            // 右子树为满二叉树 高度为h4 右子树节点数为 2**h4-1 再加上当前节点
            count += Math.pow(2,h4);
            h1--;
            h4 = h2-1;
            root = root.left;
        }else{
            // 左子树为满二叉树
            count += Math.pow(2,h1);
            h4--;
            h1 = h3-1;
            root = root.right;
        }
    }
    count += Math.pow(2,h1+1)-1;
    return count;
}

