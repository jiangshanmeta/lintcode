public abstract class Shape {
    public abstract double area();
}

public class Circle extends Shape {
    public int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        double r = (double)radius;
        return Math.PI*r*r;
    }
}
public class Square extends Shape {
    public int sideLength;

    public Square(int sideLength) {
        this.sideLength = sideLength;
    }

    @Override
    public double area() {
        double l = (double)sideLength;
        return l*l;
    }
}