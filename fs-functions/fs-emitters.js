import renameFile from "./rename-file.js";
import readDir from "./read-dir.js";
import createFile from "./create-file.js";
import copyFile from "./copy-file.js";
import moveFile from "./move-file.js";
import deleteFile from "./delete-file.js";

export default function(cliEmitter) {
  cliEmitter.on("ls", readDir);
  cliEmitter.on("add", createFile);
  cliEmitter.on("rn", renameFile);
  cliEmitter.on("cp", copyFile);
  cliEmitter.on("mv", moveFile);
  cliEmitter.on("rm", deleteFile);
};
