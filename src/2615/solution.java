public class Students {
    private String name;
    private int age;
    private String sex;
    private int number;

    public Students(String name, int age, String sex, int number) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.number = number;

    }

    public void fun() {
        System.out.println("名字:" + name + ",年龄:" + age + ",性别:" + sex + ",学号:" + number);

    }
}