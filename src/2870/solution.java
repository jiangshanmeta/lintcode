public interface Person {
    // write your code here
    String ifs = "";
    String speak();
}
public class Student implements Person {
	String ifs = "Person";
    public String speak() {
        return "Student class implements " + ifs;
    }
}