class Rectangle:

    '''
     * Define a constructor which expects two parameters width and height here.
    '''
    def __init__(self,width,height):
        self.area = width*height
    
    '''
     * Define a public method `getArea` which can calculate the area of the
     * rectangle and return.
    '''
    def getArea(self):
        return self.area