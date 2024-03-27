class Library {
    private String name;
    private String author;
    private double price;

    public static class Book {
        String title;
        String author;
        double price;

        public Book(String title, String author, double price) {
            this.title = title;
            this.author = author;
            this.price = price;
        }

        public void show() {
            System.out.println("The book title is " + title);
            System.out.println("The author is " + author);
            System.out.printf("Price is $%.1f", price);
        }

    }

    public Library() {

    }

    public Library(String name, String author, double price) {
        this.name = name;
        this.author = author;
        this.price = price;
    }

    public void show() {
        management();
        System.out.println("The book title is " + name);
        System.out.println("The author is " + author);
        System.out.println("Price is $" + String.format("%.1f", price));
    }

    public void management() {
        System.out.println("Managing Books");
    }
}
