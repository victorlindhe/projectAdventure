// A moveable physical object, that can go around on the map

class MoveableObject extends PhysicalObject {
    constructor(...args) {
        super(...args);
        this.direction = {};
    }

    move({ x = 0, y = 0 }) {
      this.direction = { x, y };

      this.x += x;
      this.y += y;
    }
}