public class Student {
    String name;
    int age;

    Student(String name){
        this.name = name;
    }
    Student(String name,int age){
        this.name = name;
        this.age = age;
    }

    Student(int age){
        this.age = age;
    }
    
    Student(){
        
    }

    @Override
    public String toString() {
        return "name = " + name + ", age = " + age;
    }

}