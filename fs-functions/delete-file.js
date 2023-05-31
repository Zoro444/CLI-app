import fs from "fs";

export default function(filePath, error) {
  if (error) {
    console.log('Write only one file path!');
    return;
  }
  if (filePath) {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`There is no ${filePath} file at this address!`);
      } 
      else {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          } 
          else {
            console.log('File deleted successfully!');
          }
        });
      }
    });   
  }
  else {
    console.log('write file path!');
  }
}
