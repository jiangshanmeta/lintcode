/**
 * @param head: the head
 * @param G: an array
 * @return: the number of connected components in G
 */
const numComponents = function (head, G) {
    const map = {};
    for (let i = 0; i < G.length; i++) {
        map[G[i]] = true;
    }
    let result = 0;
    let lastNotInG = true;
    while (head) {
        if (map[head.val]) {
            if (lastNotInG) {
                result++;
                lastNotInG = false;
            }
        } else {
            lastNotInG = true;
        }
        head = head.next;
    }

    return result;
};
