// A physical object on the map
// Coordinates are the upper left corner of the object

class PhysicalObject {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y; 
    this.width = width;
    this.height = height;
  }  
}