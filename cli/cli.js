import os from "os";

export default function(cliEmitter) {
   
    const userName = os.userInfo().username;
    process.stdout.write(`Welcome ${userName}!\n`);
    
    cliEmitter.on("os --cpus", () => console.log((os.cpus())));
    cliEmitter.on("os --homedir", () => console.log(os.homedir()));
    cliEmitter.on("os --username", () => console.log(userName));
    cliEmitter.on("os --architecture", () => console.log(os.arch()));
    cliEmitter.on("os --hostname", () => console.log(os.hostname()));
    cliEmitter.on("os --platform", () => console.log(os.platform()));
    cliEmitter.on("os --memory", () => console.log(os.totalmem()));

    cliEmitter.on(".exit", () => {
        console.log(`Thank you ${userName}, goodbye!`);
        process.exit();
    }); 
}
