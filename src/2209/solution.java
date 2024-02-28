public class Father {
    private String name = "Zhuge Liang";
    private int id = 1;

    public Father() {
    }

    /**
     * 
     * @param name: Father's name
     * @param id:   Father's id
     */
    public Father(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void introduction() {
        System.out.println("Hello, my name is " + name + ", my id is " + id +
                ".");
    }
}

public class Son extends Father {

    public Son() {
        super("Zhuge Liang", 1);
    }

    public Son(String name, int id) {
        super(name, id);
    }
}

class Main {
    public static void main(String[] args) {
        Son son1 = new Son();
        son1.introduction();

        Son son2 = new Son("Zhuge Zhan", 2);
        son2.introduction();

    }
}
