import { EventEmitter } from "events";
import os from "os";

process.stdin.setEncoding('utf-8');

const userName = os.userInfo().username;
process.stdout.write(`Welcome ${userName}!\n`);

const cliEmitter = new EventEmitter();

process.on('SIGINT', () => cliEmitter.emit('.exit'));

cliEmitter.on(".exit", () => {
    console.log(`Thank you ${userName}, goodbye!`);
    process.exit();
});

cliEmitter.on("os --cpus", () => console.log((os.cpus())));
cliEmitter.on("os --homedir", () => console.log(os.homedir()));
cliEmitter.on("os --username", () => console.log(userName));
cliEmitter.on("os --architecture", () => console.log(os.arch()));
cliEmitter.on("os --hostname", () => console.log(os.hostname()));
cliEmitter.on("os --platform", () => console.log(os.platform()));
cliEmitter.on("os --memory", () => console.log(os.totalmem()));

process.stdin.on("data", (data) => {
    data = data.trim();

    if (cliEmitter.listenerCount(data) <= 0) {
        console.log("Invalid input \n");
    }
    else {
        cliEmitter.emit(data);
    }
})
