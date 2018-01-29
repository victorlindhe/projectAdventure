// Initial file for the game code
$(document).ready(() => {

  const ESC_BUTTON_KEY_CODE = 27;

  let game = new Game(GAME_LOOP_INTERVAL);

  // Starting the game...
  console.log('Starting Project Adventure...');
  game.start()

  // Stopping the game when pressing escape
  $(document).keyup((e) => {
    if(e.keyCode === ESC_BUTTON_KEY_CODE) {
      game.stop();
      alert('Game stopped!');
    }
  });

});