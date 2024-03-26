public enum WeekDay {
    SUN, MON, TUE, WED, THU, FRI, SAT;
}

public class Solution {
    public static boolean isRestDay(WeekDay day) {
        if (day == WeekDay.SAT || day == WeekDay.SUN) {
            return true;
        }
        return false;

    }
}