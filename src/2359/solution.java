public class Main {
    public static void main(String[] args) {
        for(int j=1;j<10;j++){
            String row = "";
            for(int i=1;i<=j;i++){
                row += i + "*" + j + "="+i*j;
                if(i != j){
                    row += " ";
                }
            }
            System.out.println(row);
        }

    }
}
