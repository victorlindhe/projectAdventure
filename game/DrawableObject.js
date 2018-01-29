// Graphical representation of an object

class DrawableObject {
  constructor(physicalObject, color) {
    this.physicalObject = physicalObject;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.physicalObject.x, 
                 this.physicalObject.y, 
                 this.physicalObject.width, 
                 this.physicalObject.height);
  }
}