public class Employee {
    String name;
    String occupation;
    String telephone;
    int age;
    int salary;
    // write your code here
    public void setName(String name){
        this.name = name;
    }

    public void setAge(int age){
        this.age = age;
    }

    public void setTelephone(String telephone){
        this.telephone = telephone;
    }

    public void setOccupation(String occupation){
        this.occupation = occupation;
    }

    public void setSalary(int salary){
        this.salary = salary;
    }

    public void printInfo(){
        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
        System.out.println("Telephone: "+telephone);
        System.out.println("Occupation: "+occupation);
        System.out.println("Salary: "+salary);
    }

}