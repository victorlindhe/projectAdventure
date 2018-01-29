class GameEngine {
  constructor(drawableMap, ctx) {
    this.drawableMap = drawableMap;
    this.ctx = ctx;
  }

  setup() {
    this.drawableMap.drawMap(this.ctx);
  }

  tick() {
    this.drawableMap.drawContent(this.ctx);
  }
}