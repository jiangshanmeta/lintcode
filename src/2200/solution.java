public class Solution {
    public void leapYear(int year) {
        int current = 1949;
        while(current<= year){
            if( (current%4 == 0 && current%100 != 0) || current%400 == 0  ){
                System.out.println(current);
            }
            current++;
        }
        
    }
}