/**
 * @param pre:
 * @param post:
 * @return:
 */
const constructFromPrePost = function (pre, post) {
    return buildTree(pre, post, 0, pre.length - 1, 0, post.length - 1);
};

function buildTree (pre, post, preStart, preEnd, postStart, postEnd) {
    if (preStart > preEnd) {
        return null;
    }
    const root = new TreeNode(pre[preStart]);
    if (preStart === preEnd) {
        return root;
    }
    let seperateIndex;
    for (let i = postStart; i < postEnd; i++) {
        if (post[i] === pre[preStart + 1]) {
            seperateIndex = i;
            break;
        }
    }
    // x - (preStart+1) = seperateindex-postStart
    root.left = buildTree(
        pre,
        post,
        preStart + 1,
        seperateIndex - postStart + preStart + 1,
        postStart,
        seperateIndex
    );
    // x - preEnd = seperaIndex + 1 - postEnd+1
    root.right = buildTree(
        pre,
        post,
        seperateIndex + preEnd + 2 - postEnd,
        preEnd,
        seperateIndex + 1,
        postEnd - 1
    );
    return root;
}
