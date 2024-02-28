public class Solution {
    /**
     *
     * @param prop1,prop2,prop3: prop1,prop2,prop3 are global
     *                           variables used to receive student information
     * @class staticInnerClass: staticInnerClass is a static internal class that
     *        contains information about the student
     */
    private static String prop1;
    private static String prop2;
    private static String prop3;

    public Solution() {
    }

    public Solution(String prop1, String prop2, String prop3) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }

    public void accessInnerProp() {
        System.out.println("studentName:" + staticInnerClass.studentName);
        System.out.println("studentId:" + staticInnerClass.studentId);
        System.out.println("studentCourse:" + staticInnerClass.studentCourse);
    }

    static class staticInnerClass {
        private static String studentName = prop1;
        private static String studentId = prop2;
        private static String studentCourse = prop3;
    }
}
