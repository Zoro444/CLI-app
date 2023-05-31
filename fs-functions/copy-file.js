import fs from "fs";

export default function(pathToFile, pathToDir) {
  if (pathToFile && pathToDir) {
    fs.access(pathToFile, fs.constants.F_OK, (err) => {
      if (err) {
        console.log('File with this name is not exist!');
      }
      else {
        const fileName = pathToFile.split('/');
        fs.access(`${pathToDir}/${fileName[fileName.length - 1]}`, fs.constants.F_OK, (err) => {
          if (err) {
            fs.copyFile(pathToFile, `${pathToDir}/${fileName[fileName.length - 1]}`, (err) => {
              if (err) {
                console.log(err);
              }
              else {
                console.log('The file copied successfully');
              }
            })
          }
          else {
            console.log(`In this directory file with name ${fileName[fileName.length - 1]} is exist`);
          }
        });        
      }
    });  
  }
  else {
    console.log('Select path to file and to directory where you want to copy!');
  }
};
