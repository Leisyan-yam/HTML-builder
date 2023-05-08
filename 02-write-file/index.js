const fs = require('fs');
const path = require('path');
const pathStream = path.join(__dirname, 'text.txt');
const { stdin, stdout } = process;
const input  = fs.createWriteStream(pathStream);
stdout.write('Добый день! Напиши что-нибудь\n')
stdin.on('data', data => {
  let info = data.toString().trim()
input.write(info)
if(info === 'exit') {
  stdout.write('Всего доброго!')
  process.exit()
  }
process.on('SIGINT', () => {
  stdout.write('Всего доброго!')
  process.exit()
})
});

