class GraphicsEngine {
  constructor(ctx) {
    this.ctx = ctx;
  }

  clearMap(x, y, width, height) {
    this.ctx.clearRect(x, y, width, height);
  }

  drawBackground(x, y, width, height, backgroundColor = COLOR_GRASS_GREEN) {
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(x, y, 2*width, 2*height);
  }

  drawObject(o, x, y) {
    let drawFunction = this.getDrawFunction(o);
    drawFunction.call(this, this.ctx, x, y);
  }

  getDrawFunction(o) {
    switch(o.constructor.name) {
      case Tree.name:
        return DrawFunctions.getTree(o);
      case MoveableObject.name:
        return DrawFunctions.getRedSquare(o);
      case Hero.name:
        return DrawFunctions.getHero(o);
      case PhysicalObject.name:
        return DrawFunctions.getBlackSquare(o);
      default:
        return DrawFunctions.getBlackSquare(o);
    }
  }
}