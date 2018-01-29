// Class for running the game loop and managing the task queue

class Game {
  constructor(id, gameLoopInterval = 200) {
    this.id = id;
    this.gameLoopInterval = gameLoopInterval;
  }
  
  // The loop function
  tick() {
    console.log('Tick...');
  }
  
  // Starts the loop
  start() {
    this.interval = setInterval(this.tick, this.gameLoopInterval);
  }

  // Stops the loop
  stop() {
    clearInterval(this.interval);
  }
}