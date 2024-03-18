public class Main {
    public static void main(String[] args) {
        String str = "jiuzhangdafahao";
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == 'A' || chars[i] == 'a') {
                chars[i] = 'a';
            } else {
                chars[i] = Character.toUpperCase(chars[i]);
            }

        }
        System.out.println(new String(chars));

    }
}