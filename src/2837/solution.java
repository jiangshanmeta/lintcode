import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6,7,8,9};
        int[] arr2 = Arrays.copyOfRange(arr,0,5);
        for(int i=0;i<arr2.length;i++){
            System.out.print(arr[i]);
            System.out.print(" ");
        }
    }
}