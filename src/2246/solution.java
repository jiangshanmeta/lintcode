public class Main {
    public static void main(String[] args) {
        Figure figure1;
        Figure figure2;
        Figure figure3;

        figure1 = new Figure();
        figure1.onDraw();

        figure2 = new Triangle();
        figure2.onDraw();

        figure3 = new Parallelogram();
        figure3.onDraw();

    }
}