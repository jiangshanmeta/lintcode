import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] nums = new int[3];
        nums[0] = scanner.nextInt();
        nums[1] = scanner.nextInt();
        nums[2] = scanner.nextInt();

        Arrays.sort(nums);

        if (nums[0] + nums[1] <= nums[2]) {
            System.out.println("Not a triangle");
        } else {
            System.out.println("Is a triangle");
        }

    }
}
