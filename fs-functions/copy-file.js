import fs from "fs";

export default function(pathToFile, pathToDir) {
    console.log(pathToFile, pathToDir)
    fs.copyFile(pathToFile, pathToDir, (err) => {
        if (err) {
            console.log(err);
        }
    })
}
