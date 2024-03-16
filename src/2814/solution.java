import java.util.*;

public class Main {
	public static void main(String[] args){
		// write your code here
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		if(a<0 || a>127){
			System.out.println("error");
		}else{
			System.out.println((char)a);
		}
        
		
  }
}