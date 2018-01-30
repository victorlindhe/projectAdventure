// View port object
// Responsible for drawing what is visible to the player

class ViewPort {
  constructor(physicalMap, ctx, x, y, width, height) {
    this.physicalMap = physicalMap;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    // Draw map background
    this.ctx.fillStyle = COLOR_GRASS_GREEN;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw objects
    this.physicalMap.objects.forEach((o) => {
      this.ctx.fillStyle = COLOR_BLACK;
      this.ctx.fillRect(o.x, o.y, o.width, o.height);
    });
  }
}