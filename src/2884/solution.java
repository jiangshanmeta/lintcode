public enum WeekDay {
    SUN, MON, TUE, WED, THU, FRI, SAT;
}

import java.util.EnumMap;
import java.util.List;

public class Solution {
    public static EnumMap<WeekDay, Integer> getRestDays(List<WeekDay> list) {
        EnumMap<WeekDay, Integer> result = new EnumMap<>(WeekDay.class);
        int sat = 0;
        int sun = 0;
        for (WeekDay d : list) {
            if (d.equals(WeekDay.SAT)) {
                sat++;
                result.put(WeekDay.SAT, sat);
            } else if (d.equals(WeekDay.SUN)) {
                sun++;
                result.put(WeekDay.SUN, sun);
            }

        }
        return result;
    }

}