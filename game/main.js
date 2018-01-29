// Initial file for the game code
$(document).ready(() => {

  const ESC_BUTTON_KEY_CODE = 27;

  // Populating the map with stuff
  let physicalObjects = [
    new PhysicalObject(0, 0, 100, 100),
    new PhysicalObject(0, 300, 100, 100),
    new PhysicalObject(200, 300, 100, 100),
    new PhysicalObject(600, 400, 100, 100)
  ];

  let map = new PhysicalMap(700, 500, physicalObjects);

  // Testing out drawing the map
  let $canvas = document.getElementById("canvas");
  let ctx = $canvas.getContext("2d");

  let drawableMap = new DrawableMap(map);
  drawableMap.drawMap(ctx);
  drawableMap.drawContent(ctx);

  drawableMap.drawContent(ctx);

  let game = new Game(GAME_LOOP_INTERVAL);

  // Starting the game...
  console.log('Starting Project Adventure...');
  game.start();

  // Stopping the game when pressing escape
  $(document).keyup((e) => {
    game.addTask(function () {
      console.log(e.keyCode);   
    });
  });

});