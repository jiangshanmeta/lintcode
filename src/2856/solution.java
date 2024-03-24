public abstract class Person {
    private String className;
    Person(String className){
        this.className = className;
    }

    public abstract String print();
    public String getClassName(){
        return className;
    }
}

public class Student extends Person{
    Student(String className){
        super(className);
    }

    public String print(){
        return "class extends Person abstract class.";
    }

}