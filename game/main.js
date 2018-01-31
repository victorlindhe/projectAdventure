// Initial file for the game code
$(document).ready(() => {

  const ESC_BUTTON_KEY_CODE = 27;
  const ARROW_LEFT_KEY_CODE = 37;
  const ARROW_UP_KEY_CODE = 38;
  const ARROW_RIGHT_KEY_CODE = 39;
  const ARROW_DOWN_KEY_CODE = 40;

  // Populating the map with stuff
  let playerObject = new MoveableObject(315, 215, 70, 70);

  let physicalObjects = [
    new PhysicalObject(0, 0, 100, 100),
    new PhysicalObject(0, 300, 100, 100),
    new PhysicalObject(200, 300, 100, 100),
    new PhysicalObject(600, 400, 100, 100)
  ];

  let map = new PhysicalMap(700, 500, physicalObjects, playerObject);

  // Testing out drawing the map
  let $canvas = document.getElementById("canvas");
  let ctx = $canvas.getContext("2d");

  let viewPort = new ViewPort(map, ctx, 700, 500);
  let physicsEngine = new PhysicsEngine(map);

  let gameEngine = new GameEngine(viewPort, physicsEngine, ctx);
  let game = new Game(GAME_LOOP_INTERVAL, gameEngine);

  // Starting the game...
  console.log('Starting Project Adventure...');
  game.start();

  // Stopping the game when pressing escape
  $(document).keydown((e) => {
    let keyCode = e.keyCode;

    switch(keyCode) {
      case ARROW_DOWN_KEY_CODE: 
        game.addTask(() => { playerObject.move({ y: WALKING_SPEED }); });
        break;
      case ARROW_UP_KEY_CODE: 
        game.addTask(() => { playerObject.move({ y: -WALKING_SPEED }); });
        break;
      case ARROW_LEFT_KEY_CODE: 
        game.addTask(() => { playerObject.move({ x: -WALKING_SPEED }); });
        break;
      case ARROW_RIGHT_KEY_CODE:
        game.addTask(() => { playerObject.move({ x: WALKING_SPEED }); });
        break;
    }

  });

});