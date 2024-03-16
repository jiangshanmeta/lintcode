import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		long n = sc.nextLong();
		int count = 0;
		while(n>0L){
			count++;
			n /= 2L;
		}
		System.out.println("Can be spent in "+ count + " days");
	}
}