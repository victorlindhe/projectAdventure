// Graphical representation of an object

class DrawableObject {
  constructor(physicalObject, color) {
    this.physicalObject = physicalObject;
    this.color = color;
    this.drawnState = {};
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.physicalObject.x, 
                 this.physicalObject.y, 
                 this.physicalObject.width, 
                 this.physicalObject.height);

    this.drawnState = {
      x: this.physicalObject.x,
      y: this.physicalObject.y,
      width: this.physicalObject.width,
      height: this.physicalObject.height
    };
  }

  shouldRedraw() {
    return (this.drawnState.x !== this.physicalObject.x) || (this.drawnState.y !== this.physicalObject.y) ||
           (this.drawnState.width !== this.physicalObject.width) || (this.drawnState.height !== this.physicalObject.height);
  }
}