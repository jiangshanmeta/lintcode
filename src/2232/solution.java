public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog("Mickey", 5);
        System.out.println(animal1);
        animal1.eat();

        Animal animal2 = new Cat("Tom", 3);
        System.out.println(animal2);
        animal2.eat();
    }
}