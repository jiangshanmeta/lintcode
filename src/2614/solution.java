class Rectangle {
    double area;
    double zhouchang;
    Rectangle(int width,int height){
        area = (width*height );
        zhouchang = 2.0*(width+height);
    }
    public void show(){
        System.out.println("周长为: " + zhouchang + ",面积为: " + area);
    }
}