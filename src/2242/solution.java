public interface IBook {
    public void getBook(String bookName, String typeName);
}

class Main {
    public static void main(String[] args) {
        IBook book = new BookImpl();
        book.getBook("Gone with the Wind", "paper");
    }
}