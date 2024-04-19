import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class PhoneDirectory {
    int[] heap;
    Set<Integer> set = new HashSet<>();
    int size;
    int maxNumbers;

    public PhoneDirectory(int maxNumbers) {
        heap = new int[maxNumbers];
        Arrays.setAll(heap, (i) -> i);
        size = maxNumbers;
        this.maxNumbers = maxNumbers;
    }

    /**
     * @return: the available number of the phone directory
     */
    public int get() {
        if (size == 0) {
            return -1;
        }
        int result = heap[0];
        set.add(result);
        heap[0] = heap[--size];
        int index = 0;
        while (2 * index + 1 < size) {
            int child = 2 * index + 1;
            if (child + 1 < size && heap[child + 1] < heap[child]) {
                child++;
            }
            if (heap[child] < heap[index]) {
                swap(index, child);
                index = child;
            } else {
                break;
            }

        }

        return result;
    }

    private void swap(int i, int j) {
        int tmp = heap[i];
        heap[i] = heap[j];
        heap[j] = tmp;
    }

    /**
     * @param number: the number to be checked
     * @return: check whether the number of the phone directory is available
     */
    public boolean check(int number) {
        return !set.contains(number) && number < maxNumbers;
    }

    /**
     * @param number: the number of the phone directory to be released
     * @return: nothing
     */
    public void release(int number) {
        if (!set.contains(number) || number >= maxNumbers) {
            return;
        }
        set.remove(number);
        this.heap[this.size++] = number;
        int index = size - 1;
        while (index > 0) {
            int p = (index - 1) >> 1;
            if (heap[p] > heap[index]) {
                swap(p, index);
                index = p;
            } else {
                break;
            }

        }

    }
}