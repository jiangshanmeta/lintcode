public class People {
    public String sex = "man";
    public String name = "Luc";

    public People() { }

    public People(String name, String sex) {
        this.sex = sex;
        this.name = name;
    }

    public String printMes(){
        return name +" is a " + sex;
    }
}