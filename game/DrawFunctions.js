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
      
      console.log(o.direction);

      let imgX = 0, imgY = 0;

      if(o.direction.y !== undefined && o.direction.y < 0) {
        imgX = o.width;
        imgY = 0;
      } else if(o.direction.x !== undefined && o.direction.x < 0) {
        imgX = 0;
        imgY = o.height + 1;
      } else if(o.direction.x !== undefined && o.direction.x > 0) {
        imgX = o.width;
        imgY = o.height + 1;
      }

      ctx.drawImage(img, imgX, imgY, o.width, o.height, o.x - x, o.y - y, o.width, o.height);
    } 
  }
}