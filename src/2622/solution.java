public class Animal {
    private String name;
    private String species;

    public Animal() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "name='" + name + '\'' +
                ", species='" + species + '\'' +
                '}';
    }
}

public class Horse extends Animal {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String call() {
        return getName() + ", who is " + getAge() + " years old, is a " + getSpecies()
                + " animal, he can eat grass and run fast!";
    }
}

public class Cow extends Animal {
    private String characteristics;

    public String getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(String characteristics) {
        this.characteristics = characteristics;
    }

    public String run() {
        return getName() + ", is a " + getSpecies() + " animal" + " he can " + getCharacteristics()
                + ", he is on the run!";
    }
}