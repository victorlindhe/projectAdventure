// View port object
// Responsible for drawing what is visible to the player

class ViewPort {
  constructor(physicalMap, graphicsEngine, width, height) {
    this.physicalMap = physicalMap;
    this.graphicsEngine = graphicsEngine;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.graphicsEngine.clearMap(0, 0, this.width, this.height);

    // Draw map background
    this.graphicsEngine.drawBackground(-this.x, -this.y, this.width, this.height);

    // Draw objects
    this.physicalMap.objects.forEach((o) => {
      this.graphicsEngine.drawObject(o, this.x, this.y);
    });

    this.graphicsEngine.drawObject(this.physicalMap.playerObject, this.x, this.y);
  }

  get x() {
    return this.physicalMap.playerObject.centerX - (this.width / 2);
  }

  get y() {
    return this.physicalMap.playerObject.centerY - (this.height / 2);
  }
}