public interface Animal {
    public abstract void eat();

    public abstract void status();
}

public class Pig implements Animal {
    @Override
    public void eat() {
        System.out.println("Pig is eating vegetables.");
    }

    @Override
    public void status() {
        System.out.println("Pig is sleeping.");
    }
}

public class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog is eating meat.");
    }

    @Override
    public void status() {
        System.out.println("Dog is running.");
    }
}