import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

class Solution {
    private ArrayList<Integer> inputData;
    Solution(){
        Scanner sc = new Scanner(System.in);
        inputData = new ArrayList<>();
        while (true){
            int n = sc.nextInt();
            if(n == 0){
                break;
            }
            inputData.add(n);
        }
        sc.close();
        
    }
    


    public ArrayList<Integer> sort() {
        inputData.sort(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1-o2;
            }
        });
        inputData.remove(inputData.get(0));
        return inputData;
    }

}