class GameEngine {
  constructor(viewPort) {
    this.viewPort = viewPort;
  }

  setup() {
    this.viewPort.draw();
  }

  tick() {
    this.viewPort.draw();
  }
}