// A moveable physical object, that can go around on the map

class MoveableObject extends PhysicalObject {
    constructor(...args) {
        super(...args);
    }

    move({ x = 0, y = 0 }) {
      this.x += x;
      this.y += y;
    }
}