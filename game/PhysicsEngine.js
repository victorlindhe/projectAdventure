class PhysicsEngine {
  constructor(physicalMap) {
    this.physicalMap = physicalMap;
  }

  // Returns how far the object can move in regards to close objects
  getMoveableDistance(moveableObject, { x, y }) {
    
    // The new positions of the object if it was to move the full distance
    let newObjectState = {
      x: x ? moveableObject.x + x : moveableObject.x,
      y: y ? moveableObject.y + y : moveableObject.y,
      xFull: x ? moveableObject.xFull + x : moveableObject.xFull,
      yFull: y ? moveableObject.yFull + y : moveableObject.yFull
    };

    let collisionObject = this.physicalMap.objects.find((o) => {
      return o.collidesWith(newObjectState);
    });

    // If there is a colliding object, we adjust the distance we can move towards it
    if(collisionObject !== undefined) {
      let response = collisionObject.handleCollision(moveableObject, { x, y });

      // If the object is to be deleted, remove it from list of objects on the map
      if(response.del && response.del === true) {
        this.physicalMap.objects = this.physicalMap.objects.filter((o) => { return o !== collisionObject });
      }

      return response;
    }

    return { x: x, y: y };
  }
}