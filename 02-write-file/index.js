const fs = require('fs');
const { stdout, stdin } = process;
let writer = fs.createWriteStream('./02-write-file/entered-text.txt');
stdout.write('Please enter text to save in a file:\n');
stdin.on('data', data => {
  if (data == 'exit\r\n') {
    process.exit();
  }
  writer.write(data);
});
process.on('SIGINT', () => {
   
  process.exit();
});

process.on('exit', () =>  
  stdout.write('\nEntering text have been completed. All the data entered have been saved to a file.'));
