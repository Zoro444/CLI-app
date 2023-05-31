import fs from 'fs';

export default function(oldFileName, newFileName) {
    if (!oldFileName && !newFileName) {
        return;
    }
    if (oldFileName && !newFileName) {
        console.log('please write new file name also!');
    }
    if (oldFileName && newFileName) {
        fs.rename(oldFileName, newFileName, (err) => {
            if (err) {
                console.log('no such file');
            }
        });
    }
}