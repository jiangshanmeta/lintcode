import java.util.*;

public class Main {
	public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        List<Integer> list = new ArrayList<>();
        int max = Integer.MIN_VALUE;
        while(n>0){
            int num = sc.nextInt();
            list.add(num);
            max = Math.max(max,num);
            n--;
        }
        
        int res = 0;
        for(int item:list){
            if(item != max){
                res += item;
            }
        }

        System.out.println(res);

		
  }
}