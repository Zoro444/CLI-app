import fs from "fs";

export default function() {
  fs.readdir('./',  { withFileTypes: true }, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      data.filter((item) => {
        if (item.isDirectory()) {
          item.type = 'directory'
          return item;
        }       
      });

      data.filter((item) => {
        if (item.isFile()) {
          item.type = 'file';
          return item;
        }        
      });

      const sortData = data.sort((a, b) => {
        if (a.type === 'directory' && b.type === 'file') {
          return -1;
        } else if (a.type === 'file' && b.type === 'directory') {
          return 1; 
        } else {
          return 0; 
        }
      });
      
       console.table(sortData, [ 'name', 'type']);
    }
  })
}
