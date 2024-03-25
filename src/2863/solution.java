public class Solution {

    public boolean determineUserName(Object object1, Object object2) {
        if ((object1 instanceof Student) && (object2 instanceof Student)) {
            Student s1 = (Student) object1;
            Student s2 = (Student) object2;
            return s1.getAge() != s2.getAge() && s1.getName().equals(s2.getName());

        } else if ((object1 instanceof Teacher) && (object2 instanceof Teacher)) {
            Teacher t1 = (Teacher) object1;
            Teacher t2 = (Teacher) object2;

            return t1.getName().equals(t2.getName()) && t1.getAge() != t2.getAge();
        }
        return false;
    }
}
