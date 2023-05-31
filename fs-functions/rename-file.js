import fs from 'fs';

export default function(oldFileName, newFileName) {
  if (!oldFileName && !newFileName) {
    console.log('Enter old and new file name!');
    return;
  }
  if (oldFileName && !newFileName) {
    console.log('Write new file name also!');
  }
  if (oldFileName && newFileName) {
    fs.rename(oldFileName, `${file}/${newFileName}`, (err) => {
      if (err) {
        console.log('Old file name is not correct!');
      }
    });
  }
};
