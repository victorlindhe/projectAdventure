// View port object
// Responsible for drawing what is visible to the player

class ViewPort {
  constructor(physicalMap, ctx, width, height, centredObject) {
    this.physicalMap = physicalMap;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.centredObject = centredObject;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw map background
    this.ctx.fillStyle = COLOR_GRASS_GREEN;
    this.ctx.fillRect(-this.x, -this.y, this.width, this.height);

    // Draw objects
    this.physicalMap.objects.forEach((o) => {
      this.ctx.fillStyle = COLOR_BLACK;
      this.ctx.fillRect(o.x - this.x, o.y - this.y, o.width, o.height);
    });
  }

  get x() {
    return this.centredObject.x - (this.width / 2);
  }

  get y() {
    return this.centredObject.y - (this.height / 2);
  }
}