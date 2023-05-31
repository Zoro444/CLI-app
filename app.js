import { EventEmitter } from "events";
import addOsEmitters from "./os-emitters/os-emitters.js";
import addFsEmitters from "./fs-functions/fs-emitters.js"

process.stdin.setEncoding('utf-8');

const cliEmitter = new EventEmitter();

addOsEmitters(cliEmitter);
addFsEmitters(cliEmitter);

process.stdin.on("data", (data) => {
  data = data.trim();
  let firstCommand = data.split(' ');
  
  if (cliEmitter.listenerCount(data) <= 0 && cliEmitter.listenerCount(firstCommand[0]) <= 0) {
    console.log("Invalid input \n");
  }
  else {
   firstCommand = data.split(' ');

   if (cliEmitter.listenerCount(data) >= 1) {
     cliEmitter.emit(data);
   }

   else if (firstCommand[1] !== undefined) {
     cliEmitter.emit(firstCommand[0], ...firstCommand.slice(1));
   }
  }
})

process.on('SIGINT', () => cliEmitter.emit('.exit'));
 