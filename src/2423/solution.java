public class Solution {
    /**
     * @param name: Represents the incoming name
     * @param age:  Represents the age of the incoming
     */
    public void print(String name, int age) {
        Student student = new Student();
        student.age = age;
        student.setName(name);

        System.out.println(student.getName());
        System.out.println(student.age);
    }
}