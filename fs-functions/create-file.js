import fs from "fs";

export default function(fileName) {
    if (fileName) {
        fs.writeFile(fileName, '', (error) => {
            if (error) {
              console.error(error);
            return;
            }
        });
    }
}