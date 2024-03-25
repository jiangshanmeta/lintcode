public interface Interface1 {
    public String print1();
    
}

public interface Interface2 {
    public String print2();
}

public class Student implements Interface1,Interface2 {
    String s1 = "Student implements Interface1";
    String s2 = "Student implements Interface2";
    public String print1(){
        return s1;
    }

    public String print2(){
        return s2;
    }

    

    
}