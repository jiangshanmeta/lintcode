import java.util.HashSet;

public class Solution {
    /**
     * @param str1: represents the first piece of data added to the set
     * @param str2: represents the second piece of data added to the set
     * @param str3: represents the third piece of data added to the set
     * @param str4: represents the fourth piece of data added to the set
     * @return: Represents the return of the created set
     */
    public HashSet<String> createHashSet(String str1, String str2, String str3,
            String str4) {
        HashSet<String> hashSet = new HashSet<>();
        hashSet.add(str1);
        hashSet.add(str2);
        hashSet.add(str3);
        hashSet.add(str4);

        return hashSet;
    }
}