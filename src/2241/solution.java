import java.text.ParseException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

public class Solution {
    /**
     *
     * @param str : str represents a time obtained
     * @return : return represents the millisecond value to be returned
     * @throws ParseException
     */
    public long getMilliSeconds(String str) throws ParseException {
        LocalDate localDate = LocalDate.parse(str, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        LocalDateTime localDateTime = localDate.atTime(0, 0, 0);
        return localDateTime.toInstant(ZoneOffset.UTC).toEpochMilli();
    }
}