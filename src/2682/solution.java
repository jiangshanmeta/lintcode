import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Solution {

    public String specificCates(int year, int day) throws ParseException {

        return LocalDate.of(year, 1, 1).plusDays(day - 1).format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));

    }
}