const EventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4());
class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit("messsage", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello Aisha');
logger.log('Welcome');

