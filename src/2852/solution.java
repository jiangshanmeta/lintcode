public class Student {
    static final String SEX_FEMALE = "female";
    static final String SEX_MALE = "male";

    public String name;
    public int age;
    public String sex = "";

    public void setSex(String sex){
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "name = "+name + ", age = " + age + ", sex = " + sex; 
    }

}