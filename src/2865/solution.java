interface Inner {
	void show();
}

public class Outer {
    public static Inner method(){
        return new Inner() {
            @Override
            public void show() {
                System.out.println("Hello JiuZhang");
            }
        };
    }
}
