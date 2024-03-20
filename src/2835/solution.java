import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();

		System.out.println("The maximum value of the two numbers is: "+Math.max(a,b));
		System.out.println("The minimum value of the two numbers is: "+Math.min(a,b));

		
	}
}