import static java.lang.Math.*;

public class Student {
    final String name;
    final int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public double math(int a, int b) {
        if (a > b) {
            return pow(2, a % 10) - pow(2, b % 10);
        } else {
            return sqrt(a) - sqrt(b);
        }
    }

    public String toString() {
        return name + " : " + age;
    }
}