abstract class Coffee {
    public abstract String MakeCoffee();
}

class BrewingCoffee extends Coffee {
    public BrewingCoffee() {
        System.out.println(MakeCoffee());
    }

    @Override
    public String MakeCoffee() {
        return "Coffee being brewed!";
    }
}

class GroundCoffee extends Coffee {
    public GroundCoffee() {
        System.out.println(MakeCoffee());
    }

    @Override
    public String MakeCoffee() {
        return "Coffee being ground!";
    }
}