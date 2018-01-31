// View port object
// Responsible for drawing what is visible to the player

class ViewPort {
  constructor(physicalMap, ctx, width, height) {
    this.physicalMap = physicalMap;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
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

    this.ctx.fillStyle = COLOR_RED;
    this.ctx.fillRect(this.physicalMap.playerObject.x - this.x, 
                      this.physicalMap.playerObject.y - this.y, 
                      this.physicalMap.playerObject.width, 
                      this.physicalMap.playerObject.height);
  }

  get x() {
    return this.physicalMap.playerObject.centerX - (this.width / 2);
  }

  get y() {
    return this.physicalMap.playerObject.centerY - (this.height / 2);
  }
}