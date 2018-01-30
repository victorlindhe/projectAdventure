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

        // Erasing the current moveable to avoid it painted out like a trace
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(d.drawnState.x, d.drawnState.y,
                     d.drawnState.width, d.drawnState.height);

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