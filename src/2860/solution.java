//write your code here
public interface InterfaceA {
	long method(long n);
}
public class ClassA implements InterfaceA{

	@Override
	public long method(long n){
		long res = 0L;
		for(long i=1L;i<=n;i += 1L){
			res += i;
		}
		return res;
	}

}
public class ClassB implements InterfaceA{

	@Override
	public long method(long n){
		long res = 1L;
		for(long i=1L;i<=n;i += 1L){
			res *= i;
		}
		return res;
	}
}
