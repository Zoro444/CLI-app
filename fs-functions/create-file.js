import fs from "fs";

export default function(fileName) {
 
  if (fileName) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
      if (err) {
        fs.writeFile(fileName, '', (error) => {
          if (error) {
            console.error(error);
            return;
          }
          else {
            console.log('File created successfully!');
          }
        });
      } 
      else {
         console.log('File with this name already exist!');
      }
    });    
  }
  else {
    console.log('Write file name!');
  }
};
