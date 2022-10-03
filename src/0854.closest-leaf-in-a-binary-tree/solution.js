/**
 * @param root: the root
 * @param k: an integer
 * @return: the value of the nearest leaf node to target k in the tree
 */
const findClosestLeaf = function (root, k) {
    const sequence = [];
    findNode(root, k, sequence);
    if (isLeaf(sequence[0])) {
        return sequence[0].val;
    }

    let levelSequence = [];
    let distance = 1;
    sequence[0].left && levelSequence.push(sequence[0].left);
    sequence[0].right && levelSequence.push(sequence[0].right);

    while (true) {
        const nextLevelSequence = [];
        for (let i = 0; i < levelSequence.length; i++) {
            if (isLeaf(levelSequence[i])) {
                return levelSequence[i].val;
            }
            levelSequence[i].left && nextLevelSequence.push(levelSequence[i].left);
            levelSequence[i].right && nextLevelSequence.push(levelSequence[i].right);
        }

        if (distance < sequence.length) {
            if (isLeft(sequence[distance - 1], sequence[distance])) {
                sequence[distance].right && nextLevelSequence.push(sequence[distance].right);
            } else {
                sequence[distance].left && nextLevelSequence.push(sequence[distance].left);
            }
            distance++;
        }
        levelSequence = nextLevelSequence;
    }
};

function isLeft (child, parent) {
    if (!parent.left) {
        return false;
    }
    return child.val === parent.left.val;
}

function isLeaf (node) {
    return !node.left && !node.right;
}

function findNode (root, k, sequence) {
    if (!root) {
        return false;
    }
    if (root.val === k) {
        sequence.push(root);
        return true;
    }
    if (findNode(root.left, k, sequence) || findNode(root.right, k, sequence)) {
        sequence.push(root);
        return true;
    }
    return false;
}
