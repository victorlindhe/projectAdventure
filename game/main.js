// Initial file for the game code
$(document).ready(() => {

  const GAME_LOOP_INTERVAL = 200;
  const ESC_BUTTON_KEY_CODE = 27;

  let gameLoop = function () {
    console.log('Tick...');
  }

  // Starting the game...
  console.log('Starting Project Adventure...');
  let interval = setInterval(gameLoop, GAME_LOOP_INTERVAL);

  // Stopping the game when pressing escape
  $(document).keyup((e) => {
    if(e.keyCode === ESC_BUTTON_KEY_CODE) {
      clearInterval(interval);
      alert('Game stopped!');
    }
  });

});