export class Solution {
    /**
     * @param k: an integer
     * @param w: an integer
     * @param profits: an array
     * @param capital: an array
     * @return: final maximized capital
     */
    findMaximizedCapital (k: number, w: number, profits: number[], capital: number[]): number {
        const profitsWithCapital = profits.map((profit, index) => {
            return {
                profit,
                cap: capital[index],
            };
        }).sort((a, b) => a.cap - b.cap);

        let index = 0;

        const heap:number[] = [];
        while (index < profitsWithCapital.length && profitsWithCapital[index].cap <= w) {
            heap.push(profitsWithCapital[index++].profit);
        }
        const swap = (i:number, j:number) => {
            const tmp = heap[i];
            heap[i] = heap[j];
            heap[j] = tmp;
        };
        const down = (parent:number) => {
            while (2 * parent + 1 < heap.length) {
                let child = parent * 2 + 1;
                if (child + 1 < heap.length && heap[child + 1] > heap[child]) {
                    child++;
                }
                if (heap[child] > heap[parent]) {
                    swap(parent, child);
                    parent = child;
                } else {
                    break;
                }
            }
        };

        const up = (child:number) => {
            while (child > 0) {
                const parent = (child - 1) >> 1;
                if (heap[parent] < heap[child]) {
                    swap(parent, child);
                    child = parent;
                } else {
                    break;
                }
            }
        };

        if (heap.length > 1) {
            for (let i = (heap.length - 2) >> 1; i > -1; i--) {
                down(i);
            }
        }

        while (k > 0 && heap.length > 0) {
            k--;

            w += heap[0];
            heap[0] = heap[heap.length - 1];
            heap.pop();
            if (heap.length > 0) {
                down(0);
            }

            while (index < profitsWithCapital.length && profitsWithCapital[index].cap <= w) {
                heap.push(profitsWithCapital[index++].profit);
                up(heap.length - 1);
            }
        }

        return w;
    }
}
