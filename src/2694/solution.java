interface InterfaceA {
    public void printCapitalLetter();
}

interface InterfaceB {
    public void printLowercaseLetter();
}

public class Print implements InterfaceA, InterfaceB {
    @Override
    public void printCapitalLetter() {
        for (int i = 0; i < 26; i++) {
            System.out.print((char) (i + 'A'));
            if (i != 25) {
                System.out.print(' ');
            }

        }
        System.out.println();
    }

    @Override
    public void printLowercaseLetter() {
        for (int i = 0; i < 26; i++) {
            System.out.print((char) (i + 'a'));
            if (i != 25) {
                System.out.print(' ');
            }
        }
        System.out.println();
    }
}