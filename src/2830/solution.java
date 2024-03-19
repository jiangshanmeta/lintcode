public class Main {
    public static void main(String[] args) {
        StringBuffer sBuffer = new StringBuffer("jiuzhang");

        sBuffer.append("jiuzhangdafahao");
        sBuffer.delete(0, 8);

        System.out.println(sBuffer.toString());

    }
}