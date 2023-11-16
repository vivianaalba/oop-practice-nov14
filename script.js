// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. 
// Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
//Create an instance of the 'Circle' class and calculate its area. 
// Similarly, do the same for the 'Triangle' class.


// Create Shape class and assign height to it. Use a function to calculate the area.
class Shape {
    constructor(height) {
      this._height = height;
    }
  
    calculateArea() {
      let area = this._height * this._height;
      return area;
    }
  }
  
  // Create Circle subclass and assign radius to it. Super is left blank because we do not get any properties from the Shape class. Use a function to calculate the area.
  class Circle extends Shape {
    constructor(radius) {
      super();
      this._radius = radius;
    }
  
    calculateArea() {
      let area = Math.PI * Math.pow(this._radius, 2);
      return area;
    }
  }
  
  // Create Triangle subclass and assign radius to it. Height is used to claculate area of a triangle, so we can use the variable assigned in the Shape class by using the super keyword. Use a function to calculate the area.
  class Triangle extends Shape {
    constructor(height, base) {
      super(height);
      this._base = base;
    }
  
    calculateArea() {
      let baseHeight = this._base * this._height;
      let area = baseHeight / 2;
      return area;
    }
  }
  
  // assign and call Shape - square
  const squareA = new Shape(2, 2);
  console.log(squareA.calculateArea());
  
  // assign and call Circle
  const circleA = new Circle(2);
  console.log(circleA.calculateArea());
  
  // assign and call Triangle
  const triangleA = new Triangle(2, 2);
  console.log(triangleA.calculateArea());