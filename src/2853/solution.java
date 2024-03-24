public class SingleClass {
    public String toString() {
        return "This is a Single Instance Class.";
    }

    private SingleClass() {

    }

    private static SingleClass instance;

    public static SingleClass getInstance() {
        if (instance == null) {
            instance = new SingleClass();
        }
        return instance;
    }

}