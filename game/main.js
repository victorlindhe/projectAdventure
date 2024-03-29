// Initial file for the game code
$(document).ready(() => {

  const ESC_BUTTON_KEY_CODE = 27;
  const ARROW_LEFT_KEY_CODE = 37;
  const ARROW_UP_KEY_CODE = 38;
  const ARROW_RIGHT_KEY_CODE = 39;
  const ARROW_DOWN_KEY_CODE = 40;

  // Populating the map with stuff
  let playerObject = new Hero(315, 215);

  let physicalObjects = [
    new Tree(0, 0),
    new Tree(0, 300),
    new Tree(200, 300),
    new Tree(600, 400),
    new Pizza(200, 200)
  ];

  let map = new PhysicalMap(600, 350, physicalObjects, playerObject);

  // Testing out drawing the map
  let $canvas = document.getElementById("canvas");
  let ctx = $canvas.getContext("2d");
  ctx.scale(2,2);

  let graphicsEngine = new GraphicsEngine(ctx);
  let viewPort = new ViewPort(map, graphicsEngine, 600, 350);
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
        game.addTask(() => {
          playerObject.move(physicsEngine.getMoveableDistance(playerObject, { y: WALKING_SPEED })); 
        });
        break;
      case ARROW_UP_KEY_CODE: 
        game.addTask(() => { 
          playerObject.move(physicsEngine.getMoveableDistance(playerObject, { y: -WALKING_SPEED })); 
        });
        break;
      case ARROW_LEFT_KEY_CODE: 
        game.addTask(() => {
          playerObject.move(physicsEngine.getMoveableDistance(playerObject, { x: -WALKING_SPEED })); 
        });
        break;
      case ARROW_RIGHT_KEY_CODE:
        game.addTask(() => { 
          playerObject.move(physicsEngine.getMoveableDistance(playerObject, { x: WALKING_SPEED }));
        });
        break;
    }

  });

});