public class Main {
	public static void main(String[] args) {
		int res = 0;
		for(int i=1;i<=100;i++){
			if(i%2 == 0){
				res += i;
			}
		}
		System.out.println("Even sum of 1 - 100: "+res);
	}
}