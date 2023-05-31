import fs from "fs";

export default function(oldPath, newPath) {
  if (oldPath && newPath) {
    fs.access(oldPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`There is no such file`);
      }
      else {
        const fileName = oldPath.split('/');
        fs.access(`${newPath}/${fileName[fileName.length - 1]}`, fs.constants.F_OK, (err) => {
          if (err) {
            fs.rename(oldPath, `${newPath}/${fileName[fileName.length - 1]}`, (err) => {
              console.log(err);
            })
          }
          else {
             console.log('In this directory already exist file with this name!');                       
          }
        });
               
      }
    });    
  }
  else {
    console.log('Select old and new files paths!');
  }
};
