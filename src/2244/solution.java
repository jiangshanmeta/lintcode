public class Main {
    public static void main(String[] args) {
        Police police = new Police();
        police.working();

        Chef chef = new Chef();
        chef.working();
    }
}
public abstract class People {
    public abstract void working();
}
public class Police extends People {
    @Override
    public void working() {
        System.out.println("The work of the police is to catch thieves.");
    }
}
public class Chef extends People {
    @Override
    public void working() {
        System.out.println("The work of the Chef is to cook.");
    }
}