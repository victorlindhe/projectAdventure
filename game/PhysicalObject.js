// A physical object on the map
// Coordinates are the upper left corner of the object

class PhysicalObject {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y; 
    this.width = width;
    this.height = height;
    this.drawable = true;
  }

  collidesWith({ x, y, xFull, yFull }) {

    // If outside any of the boundaries
    if(xFull <= this.x || yFull <= this.y) return false;
    if(x >= this.xFull || y >= this.yFull) return false;

    return true;
  }

  handleCollision(moveableObject, { x, y }) {
    let response = {};

    if(x) {
      if(moveableObject.xFull < this.x) {
        response.x = this.x - moveableObject.xFull;
      } else if (moveableObject.x > this.xFull) {
        response.x = -(moveableObject.x - this.xFull);
      }
    }

    if(y) {
      if(moveableObject.yFull < this.y) {
        response.y = this.y - moveableObject.yFull;
      } else if (moveableObject.y > this.yFull) {
        response.y = -(moveableObject.y - this.yFull);
      }
    }

    return response;
  }
  
  get centerX() {
    return this.x + (this.width / 2);
  }

  get centerY() {
    return this.y + (this.height / 2);
  }

  get xFull() {
    return this.x + this.width;
  }

  get yFull() {
    return this.y + this.height;
  }

}