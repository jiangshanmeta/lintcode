import other.*;

public class Solution extends Other1 {
    String root;

    public void setRoot() {
        root = getProtected() + ' ' + Other2.getPublic();

    }

    public String getRoot() {
        return root;
    }

}