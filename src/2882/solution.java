public class Student implements Comparable {

    private String name;
    private int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return this.name;
    }

    public int getScore() {
        return this.score;
    }

    @Override
    public int compareTo(Object s) {
        Student o = (Student) s;
        if (this.score != o.score) {
            return this.score < o.score ? 1 : -1;
        }
        return this.name.compareTo(o.name);

    }

    @Override
    public String toString() {
        return this.name + " " + this.score;
    }
}