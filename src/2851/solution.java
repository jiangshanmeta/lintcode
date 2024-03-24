public class Animal {
    private String name;
    private String type;
    private int age;

    public void setAnimalMessage(String name, String type, int age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }

    public void printAnimalMessage() {
        System.out.println(name + " is a " + type + " and is " + age + " years old this year.");
    }
}