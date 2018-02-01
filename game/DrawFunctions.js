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

  static getTree(o) {
    return (ctx, x, y) => {
      var img = new Image();
      img.src = "graphics/tree.png";
      ctx.drawImage(img, o.x - x, o.y - y);
    } 
  }

  static getHero(o) {
    return (ctx, x, y) => {
      var img = new Image();
      img.src = "graphics/hero.png";
      ctx.drawImage(img, o.x - x, o.y - y);
    } 
  }
}