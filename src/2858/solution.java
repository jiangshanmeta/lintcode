abstract public class Vehicle {
	abstract public String NoOfWheels();
}
public class Motorbike extends Vehicle{
    @Override
    public String NoOfWheels(){
        return "This Motorbike has two wheels";
    }

}

public class Car extends Vehicle{	
    @Override
    public String NoOfWheels(){
        return "This car has four wheels";
    }
}
