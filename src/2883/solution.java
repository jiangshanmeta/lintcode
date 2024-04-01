
import java.util.*;

public class Products {
    Map<String, Integer> storage;
    Map<String, Integer> sale;

    // write your code here

    public Products(Map<String, Integer> storage, Map<String, Integer> sale) {
        this.storage = storage;
        this.sale = sale;
    }

    public boolean onSale(String key, int n) {
        if (n < 1) {
            return false;
        }
        if (storage.containsKey(key) && storage.get(key) > 0) {
            int storeCount = storage.get(key);
            int count = Math.min(n, storeCount);
            storage.put(key, storeCount - count);
            if (sale.containsKey(key)) {
                sale.put(key, sale.get(key) + count);
            } else {
                sale.put(key, count);
            }
            return true;
        }
        return false;
    }

    public int sellOut(String key, int n) {
        if (!sale.containsKey(key)) {
            return 0;
        }
        int saleCount = sale.get(key);
        int count = Math.min(n, saleCount);
        if (count == saleCount) {
            sale.remove(key);
        } else {
            sale.put(key, saleCount - count);
        }

        return count;
    }

    public String readStorage() {
        return formatMap(storage);
    }

    public String readSale() {
        return formatMap(sale);
    }

    private static String formatMap(Map<String, Integer> map) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append('{');
        Set<Map.Entry<String, Integer>> entries = map.entrySet();

        int count = 0;
        for (Map.Entry<String, Integer> entry : entries) {
            count++;
            stringBuilder.append(entry.getKey());
            stringBuilder.append('=');
            stringBuilder.append(entry.getValue());
            if (count != entries.size()) {
                stringBuilder.append(", ");
            }

        }

        stringBuilder.append('}');
        return stringBuilder.toString();
    }
}