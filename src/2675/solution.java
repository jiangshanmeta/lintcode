import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Solution {

    public String dateConversion(String str) throws ParseException {
        LocalDate localDate = LocalDate.parse(str, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        return localDate.format(DateTimeFormatter.ofPattern("yyyy年M月d日"));
    }
}