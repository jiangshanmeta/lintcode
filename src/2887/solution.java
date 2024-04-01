import java.util.*;

public class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return "[name: " + name + ", age: " + age + "]";
    }
}

public class Solution {
    public static Map<Student, Integer> getSortMap(List<Student> list) {
        TreeMap<Student, Integer> treeMap = new TreeMap<>((a, b) -> {
            if (a.age != b.age) {
                return a.age - b.age;
            }
            return a.name.compareTo(b.name);
        });

        for (int i = 0; i < list.size(); i++) {
            treeMap.put(list.get(i), i);
        }
        return treeMap;

    }

}