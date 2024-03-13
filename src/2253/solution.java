public enum Season {
    SPRING("Spring", "spring returns and everything comes back to life"),
    SUMMER("Summer", "the summer heat is sweetest with you"),
    AUTUMN("Autumn", "autumn winds and floodwaters rise"),
    WINTER("Winter", "the north wind is howling and the snow is drifting");

    private String name;
    private String feature;

    Season(String name, String feature) {
        this.name = name;
        this.feature = feature;
    }

    public String getName() {
        return name;
    }

    public String getFeature() {
        return feature;
    }

    @Override
    public String toString() {
        return name + ": " + feature + ".";
    }
}

public class Main {
    public static void main(String[] args) {
        Season spring = Season.SPRING;
        Season summer = Season.SUMMER;
        Season autumn = Season.AUTUMN;
        Season winter = Season.WINTER;
        System.out.println(spring);
        System.out.println(summer);
        System.out.println(autumn);
        System.out.println(winter);
    }
}