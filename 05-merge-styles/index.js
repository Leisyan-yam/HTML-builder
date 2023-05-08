const fs = require('fs');
const path = require('path');
const pathStream = path.join(__dirname, 'styles');



fs.readdir(pathStream, 
  { withFileTypes: true },  
  (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
    if ((path.parse(file.name).ext === '.css') && (file.isFile())){
    fs.readFile( 
      path.join(__dirname, 'styles', `${file.name}`), 
      'utf-8', 
      (err, data) => {
      if (err) throw err;
      fs.writeFile(
        path.join(__dirname, 'project-dist', 'bundle.css'),
        data,
        (err) => {
          if (err) throw err;
          console.log('Файл был создан');
        }
    );
      }
    )
    





    }
    })
  }
})