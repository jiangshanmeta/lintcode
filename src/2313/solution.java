public enum PropertyEnum {
    PlumBlossoms,
    Orchid,
    Bamboo,
    Chrysanthemum;
}

public class Solution {
    /**
     * @methods judge: Enumerate and print out the enumeration values
     *          in the judge method
     */
    public void printCharacter(PropertyEnum s) {
        switch (s) {
            case PlumBlossoms:
                System.out.println(
                        "PlumBlossoms: A noble man who explores the waves and the snow");
                break;

            case Orchid:
                System.out.println(
                        "Orchid: A sage of the world, the fragrance of the deep valley");
                break;

            case Bamboo:
                System.out.println("Bamboo: A gentleman of modesty and elegance");
                break;

            case Chrysanthemum:
                System.out.println("Chrysanthemum: A hermit of the world");
                break;
        }
    }

    public void textCharacter() {
        printCharacter(PropertyEnum.PlumBlossoms);
        printCharacter(PropertyEnum.Orchid);
        printCharacter(PropertyEnum.Bamboo);
        printCharacter(PropertyEnum.Chrysanthemum);
    }
}
