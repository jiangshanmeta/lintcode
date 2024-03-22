public class User {
    String name;
    String behavior;

    public void work() {
    }

    public String toString() {
        return name + " is " + behavior;
    }
}

public class Teacher extends User {

    public Teacher(String name) {
        this.name = name;

    }

    @Override
    public void work() {
        this.behavior = "teaching";
    }

}

public class Student extends User {

    public Student(String name) {
        this.name = name;

    }

    @Override
    public void work() {
        this.behavior = "learning";
    }

}