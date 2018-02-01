class DrawFunctions {
  constructor() {

  }

  static getBlackSquare(o) {
    return (ctx, x, y) => {
      ctx.fillStyle = COLOR_BLACK;
      ctx.fillRect(o.x - x, o.y - y, o.width, o.height);
    }
  }

  static getRedSquare(o) {
    return (ctx, x, y) => {
      ctx.fillStyle = COLOR_RED;
      ctx.fillRect(o.x - x, o.y - y, o.width, o.height);
    }
  }
}