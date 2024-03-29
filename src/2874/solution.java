public class Solution {
    int a = 0;

    public void method() {
        final int a = 20;
        class Inner {
            int a1 = a;
            int a2 = Solution.this.a;
        }
        Inner inner = new Inner();

        System.out.println(inner.a1);
        System.out.println(inner.a2);
    }

}
