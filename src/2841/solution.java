class Parent {
    private String str1 = "Please connect the charger !!!";

    public void getName() {
        System.out.println(str1);
    }
}

class Child extends Parent {
    private String str2 = "Insufficient power";

    // @Override
    public void getName() {
        System.out.println(str2);
        super.getName();

    }
}