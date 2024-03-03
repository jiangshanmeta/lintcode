public class User {
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}


public class Solution {
    private final User  user = new User();
    
    public User getUser(String name){
        user.setName(name);
        return user;
    }

}