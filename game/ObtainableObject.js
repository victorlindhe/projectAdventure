class ObtainableObject extends PhysicalObject {
  constructor(...args) {
    super(...args);
  } 

  handleCollision(moveableObject, { x, y }) {
    return { x: x, y: y, del: true };
  }
}