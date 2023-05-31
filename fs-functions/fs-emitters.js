import renameFile from "./rename-file.js";
import readDir from "./read-dir.js";
import createFile from "./create-file.js";
import copyFile from "./copy-file.js";

export default function(cliEmitter) {
    cliEmitter.on("ls", readDir);
    cliEmitter.on("add", createFile);
    cliEmitter.on("rn", renameFile);
    cliEmitter.on("cp", copyFile);
}