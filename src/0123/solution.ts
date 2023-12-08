export class Solution {
    /**
     * @param board: A list of lists of character
     * @param word: A string
     * @return: A boolean
     */
    exist (board: string[][], word: string): boolean {
        const M = board.length;
        const N = board[0].length;
        const mark = new Array<boolean[]>(M);
        for (let i = 0; i < M; i++) {
            mark[i] = new Array<boolean>(N);
        }
        const deltas = [
            [-1, 0, ],
            [1, 0, ],
            [0, -1, ],
            [0, 1, ],
        ];
        const dfs = (x:number, y:number, index:number):boolean => {
            if (index === word.length) {
                return true;
            }
            if (x < 0 || y < 0 || x === M || y === N || mark[x][y] || board[x][y] !== word[index]) {
                return false;
            }
            mark[x][y] = true;
            for (const [dx, dy, ] of deltas) {
                if (dfs(x + dx, y + dy, index + 1)) {
                    return true;
                }
            }
            mark[x][y] = false;
            return false;
        };
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
