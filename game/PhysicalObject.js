// A physical object on the map
// Coordinates are the upper left corner of the object

class PhysicalObject {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y; 
    this.width = width;
    this.height = height;
  }

  get centerX() {
    return this.x + (this.width / 2);
  }

  get centerY() {
    return this.y + (this.height / 2);
  }
}