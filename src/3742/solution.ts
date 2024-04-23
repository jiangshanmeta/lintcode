export class Solution {
    /**
     * @param team: The participants of the game.
     * @param dist: The catching distance.
     * @return: The maximum number of people can be caught.
     */
    catchMaximumPeople (team: number[], dist: number): number {
        let catchIndex = team.indexOf(1);
        let hideIndex = team.indexOf(0);
        if (catchIndex === -1 || hideIndex === -1) {
            return 0;
        }
        let result = 0;
        while (catchIndex < team.length && catchIndex !== -1 && hideIndex !== -1) {
            while (hideIndex < catchIndex - dist) {
                hideIndex = team.indexOf(0, hideIndex + 1);
            }
            if (hideIndex === -1) {
                break;
            }
            if (hideIndex <= catchIndex + dist) {
                result++;
                hideIndex = team.indexOf(0, hideIndex + 1);
            }
            catchIndex = team.indexOf(1, catchIndex + 1);
        }
        return result;
    }
}
