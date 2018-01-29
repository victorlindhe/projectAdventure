// Class for running the game loop and managing the task queue

class Game {
  constructor(gameLoopInterval = 200, gameEngine) {
    console.log(this);
    this.gameLoopInterval = gameLoopInterval;
    this.gameEngine = gameEngine;
    
    // The task queue is to handle input from the user and process it in the right order
    this.taskQueue = [];
  }
  
  // The loop function
  tick() {
    console.log('----- NEW TICK -----');

    while(this.taskQueue.length > 0) {
      let task = this.taskQueue.shift();
      task.call();
    }

    this.gameEngine.tick();
  }
  
  // Starts the loop
  start() {
    this.gameEngine.setup()
    this.interval = setInterval(this.tick.bind(this), this.gameLoopInterval);
  }

  // Stops the loop
  stop() {
    clearInterval(this.interval);
  }

  // Adds a task to the task queue...
  addTask(task) {
    this.taskQueue.push(task);
  }
}