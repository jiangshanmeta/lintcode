public class Solution {
    public String getRange(String level) {
        String str="";
        switch(level){
            case "A":
                str = "90~100";
                break;
            case "B":
                str = "80~89";
                break;
            case "C":
                str = "70~79";
                break;
            case "D":
                str = "60~69";
                break;
            case "E":
                str = "0~59";
                break;
            default:
                str = "Unknown level";
        }

        return str;
    }
}