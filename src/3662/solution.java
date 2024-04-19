import java.util.ArrayDeque;
import java.util.Queue;

public class HitCounter {
    Queue<Integer> queue = new ArrayDeque<>();

    /**
     * @param timestamp: the timestamp
     * @return: nothing
     */
    public void hit(int timestamp) {
        this.queue.add(timestamp);
    }

    /**
     * @param timestamp: the timestamp
     * @return: the count of hits in recent 300 seconds
     */
    public int getHits(int timestamp) {
        while (!queue.isEmpty() && queue.peek() <= timestamp - 300) {
            queue.remove();
        }
        return queue.size();
    }
}