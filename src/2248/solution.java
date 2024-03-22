import java.text.ParseException;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class Solution {

    /**
     *
     * @param birthday : birthday represents someone's birthday
     * @param nowTime  : nowTime represents the current time
     * @return : return represents the number of days to be returned
     * @throws ParseException
     */
    public long getTime(String birthday, String nowTime)
            throws ParseException {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate start = LocalDate.parse(birthday, format);
        LocalDate end = LocalDate.parse(nowTime, format);

        return ChronoUnit.DAYS.between(start, end);
    }
}