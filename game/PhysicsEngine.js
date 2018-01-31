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
      let response = {};

      if(x) {
        if(moveableObject.xFull < collisionObject.x) {
          response.x = collisionObject.x - moveableObject.xFull;
        } else if (moveableObject.x > collisionObject.xFull) {
          response.x = -(moveableObject.x - collisionObject.xFull);
        }
      }

      if(y) {
        if(moveableObject.yFull < collisionObject.y) {
          response.y = collisionObject.y - moveableObject.yFull;
        } else if (moveableObject.y > collisionObject.yFull) {
          response.y = -(moveableObject.y - collisionObject.yFull);
        }
      }

      return response;
    }

    return { x: x, y: y };
  }
}