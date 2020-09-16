/**
 * @param root: the given tree
 * @return: the tree after swapping
 */
const bstSwappedNode = function (root) {
    const sequence = [];
    inOrder(root, sequence);

    for (let i = 0; i < sequence.length - 1; i++) {
        // 找到那个大的
        if (sequence[i].val > sequence[i + 1].val) {
            // 找到那个小的
            let j = i + 1;
            for (let k = j; k < sequence.length; k++) {
                if (sequence[k].val < sequence[k - 1].val) {
                    j = k;
                }
            }
            const tmp = sequence[i].val;
            sequence[i].val = sequence[j].val;
            sequence[j].val = tmp;
        }
    }
    return root;
};

function inOrder (root, sequence) {
    root.left && inOrder(root.left, sequence);
    sequence.push(root);
    root.right && inOrder(root.right, sequence);
}
