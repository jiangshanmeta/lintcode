import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Solution {

    public String dateConversion(String str) throws ParseException {
        LocalDate localDate = LocalDate.parse(str, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        DayOfWeek dayOfWeek = localDate.getDayOfWeek();
        EnumMap<DayOfWeek, String> enumMap = new EnumMap<>(DayOfWeek.class);
        enumMap.put(DayOfWeek.SUNDAY, "星期日");
        enumMap.put(DayOfWeek.MONDAY, "星期一");
        enumMap.put(DayOfWeek.TUESDAY, "星期二");
        enumMap.put(DayOfWeek.WEDNESDAY, "星期三");
        enumMap.put(DayOfWeek.THURSDAY, "星期四");
        enumMap.put(DayOfWeek.FRIDAY, "星期五");
        enumMap.put(DayOfWeek.SATURDAY, "星期六");

        return enumMap.get(dayOfWeek);
    }
}