/**
 * @param root: the given BST
 * @param k: the given k
 * @return: the kth smallest element in BST
 */
const kthSmallest = function (root, k) {
    const stack = [];
    while(root){
        stack.push(root);
        root = root.left;
    }
    while(true){
        k--;
        root = stack.pop();
        if(!k){
            return root.val;
        }
        root = root.right;
        while(root){
            stack.push(root);
            root = root.left;
        }
    }

}

