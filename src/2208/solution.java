public class Main {
    public static void main(String[] args) {
        // write you code here
        Employee employee1 = new Employee();
        employee1.setName("zhangsan");
        employee1.setAge(21);
        employee1.setTelephone("13245667890");
        employee1.setOccupation("Senior Engineer");
        employee1.setSalary(100000);
        employee1.printInfo();

        Employee employee2 = new Employee();
        employee2.setName("lisi");
        employee2.setAge(22);
        employee2.setTelephone("13245667891");
        employee2.setOccupation("Junior Engineer");
        employee2.setSalary(80000);
        employee2.printInfo();
        
    }
}