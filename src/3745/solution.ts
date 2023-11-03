/* eslint-disable no-array-constructor */
export class Solution {
    /**
     * @param lights: Location and extent of illumination of street lights
     * @return: The brightest position
     */
    brightestPosition (lights: number[][]): number {
        const diffPos = new Array<{
          index:number;
          value:number;
      }>();

        for (const [position, range, ] of lights) {
            diffPos.push({
                value: 1,
                index: position - range,
            });
            diffPos.push({
                value: -1,
                index: position + range + 1,
            });
        }
        diffPos.sort((a, b) => a.index - b.index);

        let maxLight = 0;
        let light = 0;
        let index = 0;
        let result = diffPos[0].index;
        while (index < diffPos.length) {
            const pos = diffPos[index].index;
            light += diffPos[index].value;
            index++;
            while (index < diffPos.length && diffPos[index].index === pos) {
                light += diffPos[index++].value;
            }
            if (light > maxLight) {
                maxLight = light;
                result = pos;
            }
        }

        return result;
    }
}
