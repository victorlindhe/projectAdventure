// Graphical representation of the map

class DrawableMap {
  constructor(physicalMap, backgroundColor = COLOR_GRASS_GREEN) {
    this.physicalMap = physicalMap;
    this.drawableObjects = [];

    this.physicalMap.objects.forEach((obj) => {
      this.drawableObjects.push(new DrawableObject(obj, COLOR_BLACK));
    })

    this.backgroundColor = backgroundColor;
  }

  drawContent(ctx) {
    this.drawableObjects.forEach((d) => {
      if(d.shouldRedraw()) {
        console.log('redrawing...')
        d.draw(ctx);
      }
    });
  }

  drawMap(ctx) {
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, 
                 this.physicalMap.width, 
                 this.physicalMap.height);
  }
}