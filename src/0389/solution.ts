export class Solution {
    /**
     * @param board: the board
     * @return: whether the Sudoku is valid
     */
    isValidSudoku (board: string[][]): boolean {
        const N = board.length;
        for (let i = 0; i < N; i++) {
            const set = new Set<string>();
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') {
                    continue;
                }
                if (set.has(board[i][j])) {
                    return false;
                }
                set.add(board[i][j]);
            }
        }
        for (let j = 0; j < N; j++) {
            const set = new Set<string>();
            for (let i = 0; i < N; i++) {
                if (board[i][j] === '.') {
                    continue;
                }
                if (set.has(board[i][j])) {
                    return false;
                }
                set.add(board[i][j]);
            }
        }
        for (let i = 0; i < N; i += 3) {
            for (let j = 0; j < N; j += 3) {
                const set = new Set<string>();
                for (let dx = 0; dx < 3; dx++) {
                    for (let dy = 0; dy < 3; dy++) {
                        if (board[i + dx][j + dy] === '.') {
                            continue;
                        }
                        if (set.has(board[i + dx][j + dy])) {
                            return false;
                        }
                        set.add(board[i + dx][j + dy]);
                    }
                }
            }
        }

        return true;
    }
}
