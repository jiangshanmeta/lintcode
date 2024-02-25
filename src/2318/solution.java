public interface Animal {
    /**
     * @param food : Any animal needs food
     */
    void eat(String food);
}


public class Solution {
    String name;

   public Solution(String name) {
       this.name = name;
   }

   public Animal get(){
       return new Animal(){
           @Override
           public void eat(String food) {
               System.out.println(name + " eat " + food);
           }
       };
   }
}