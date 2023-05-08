const fs = require('fs');
const path = require('path');
const pathStream = path.join(__dirname, 'files');

  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) throw err;
  console.log("папка создана!")
});

fs.readdir(pathStream, 
  { withFileTypes: true }, 
  (err, files) => {
  if (err)
    console.log(err);
  else {
  files.forEach(file => {
  fs.copyFile(
    path.join(__dirname, 'files', `${file.name}`),
    path.join(__dirname, 'files-copy', `${file.name}`),
    (err) => {
      if (err) throw err;
    }
    )
  })
  console.log('файлы скопированы!')
  }
})



