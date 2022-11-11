export class Solution {
    /**
     * @param words: a list of words
     * @return: a string which is correct order
     */
    alienOrder (words) {
        const graph = new Map();
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                if (!graph.has(words[i][j])) {
                    graph.set(words[i][j], []);
                }
            }
        }
        for (let i = 0; i < words.length - 1; i++) {
            let hasDiff = false;
            for (let j = 0; j < Math.min(words[i].length, words[i + 1].length); j++) {
                const a = words[i][j];
                const b = words[i + 1][j];
                if (a !== b) {
                    graph.get(a).push(b);
                    hasDiff = true;
                    break;
                }
            }
            if (!hasDiff && words[i].length > words[i + 1].length) {
                return '';
            }
        }

        const visited = new Set();
        const onStack = new Set();
        let hasCircle = false;
        const post = [];
        const dfs = (v) => {
            visited.add(v);
            onStack.add(v);
            for (const nextV of graph.get(v)) {
                if (hasCircle) {
                    break;
                }
                if (!visited.has(nextV)) {
                    dfs(nextV);
                } else if (onStack.has(nextV)) {
                    hasCircle = true;
                }
            }
            onStack.delete(v);
            post.push(v);
        };
        // 注意这里和leetcode不同 有多个可能的答案需要字典序最小的
        // 所以key遍历顺序从大到小
        // 这样逆后序就是字典序最小的
        for (const v of [...graph.keys(), ].sort().reverse()) {
            if (!visited.has(v) && !hasCircle) {
                dfs(v);
            }
        }
        if (hasCircle) {
            return '';
        }
        return post.reverse().join('');
    }
}
