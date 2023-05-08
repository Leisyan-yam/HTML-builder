const fs = require('fs');
const path = require('path');
const pathStream = path.join(__dirname, 'secret-folder');

fs.readdir(pathStream, 
  { withFileTypes: true },  
  (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\Secret-folder contains: ");
    files.forEach(file => {
        let fileName = file.name
        let name = path.parse(fileName).name;
        let ext = path.parse(fileName).ext.substring(1);
        if(file.isFile()){
        fs.stat(path.join(__dirname, 'secret-folder', `${fileName}`), (err, data) => {
          if (err) {
            console.log(err);
          } else {
           size = data.size;
           let output = `${name} - ${ext} - ${(size/1024).toFixed(3)}kb `
           console.log(output)
          }
        });
    }
    })
  }
})


