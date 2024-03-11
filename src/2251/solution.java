public class Father {
    static {
        System.out.println("Father's message:");
    }

    private String name = "Liu Bei";
    private int id = 1;

    public Father() {

    }

    public Father(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void introduction() {
        System.out.println("name: " + name + ", id: " + id + ".");
    }
}

public class Son extends Father {
    static {
        System.out.println("Son's message:");
    }

    public Son(String name, int id) {
        super(name, id);
    }

}

public class Grandson extends Son {
    static {
        System.out.println("Grandson's message:");
    }

    public Grandson(String name, int id) {
        super(name, id);
    }

}
