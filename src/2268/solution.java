public class Cow {
    /**
     * @param weight: weight The weight of a cow represents
     * @methods PrintInfo: The PrintInfo method creates the
     *          object and calls the methods in it
     */
    private float weight;

    public Cow(float weight) {
        this.weight = weight;
    }

    class CowLeg {
        private float height;
        private String color;

        public CowLeg(float height, String color) {
            this.height = height;
            this.color = color;
        }

        public void info() {
            System.out.println("The color of the cow is: " + color);
            System.out.println("The height of the cow is: " + height);
            System.out.println("The weight of the cow is: " + weight);
        }
    }

    public void printInfo(float height, String color) {
        CowLeg c1 = new CowLeg(height, color);
        c1.info();
    }
}
