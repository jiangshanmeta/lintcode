public enum WeekDay {
    SAT("Restday"),
    SUN("Restday"),

    MON("Workday"),
    TUE("Workday"),
    WED("Workday"),
    THU("Workday"),
    FRI("Workday");

    private final String day;

    WeekDay(String day) {
        this.day = day;
    }

    public String getDay() {
        return day;
    }

    public static WeekDay[] getWorkDay() {
        return new WeekDay[] {
                MON,
                TUE,
                WED,
                THU,
                FRI,
        };
    }

    public static WeekDay[] getRestDay() {
        return new WeekDay[] {
                SUN,
                SAT,
        };
    }
}