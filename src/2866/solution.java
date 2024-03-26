import java.util.EnumMap;

enum WeekDay {
    SUN, MON, TUE, WED, THU, FRI, SAT;
}

public class Solution {
    public static EnumMap<WeekDay, String> getDays() {
        EnumMap<WeekDay, String> map = new EnumMap<>(WeekDay.class);
        map.put(WeekDay.SAT, "rest");
        map.put(WeekDay.SUN, "rest");

        map.put(WeekDay.MON, "work");
        map.put(WeekDay.TUE, "work");
        map.put(WeekDay.WED, "work");
        map.put(WeekDay.THU, "work");
        map.put(WeekDay.FRI, "work");

        return map;

    }
}