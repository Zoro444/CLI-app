import { EventEmitter } from "events";

process.stdin.setEncoding('utf-8');
process.stdout.write(`Welcome ${process.env.USERNAME}! \n`);

const cliEmitter = new EventEmitter();

process.on('SIGINT', () => cliEmitter.emit('.exit'));

cliEmitter.on(".exit", () => {
    console.log(`Thank you ${process.env.USERNAME}, goodbye!`);
    process.exit();
});

cliEmitter.on("os --cpus", () => console.log((process.cpuUsage())));
cliEmitter.on("os --homedir", () => console.log(process.env.HOME));
cliEmitter.on("os --username", () => console.log(process.env.USERNAME));
cliEmitter.on("os --architecture", () => console.log(process.arch));
cliEmitter.on("os --hostname", () => console.log(process.env.HOSTNAME));
cliEmitter.on("os --platform", () => console.log(process.platform));
cliEmitter.on("os --memory", () => console.log(process.memoryUsage()));

process.stdin.on("data", (data) => {
    data = data.trim();

    if (cliEmitter.listenerCount(data) <= 0) {
        console.log("Invalid input \n");
    }
    else {
        cliEmitter.emit(data);
    }
})
