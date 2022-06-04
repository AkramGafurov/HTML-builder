const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit} = process;
const filePath = path.join(__dirname, 'text.txt')

const outPut = fs.createWriteStream(filePath);

 fs.writeFile(filePath, '', (err) => {
   if(err) throw err;
 }) 

stdout.write('Hello! Type some text!\n')

stdin.on('data', (data) => {
  if(data.toString().includes('exit') || process.exitCode == 0) {
    exit();
  } 
    fs.appendFile(path.join(__dirname, 'text.txt'), data.toString(), (err) => {
      if(err) throw err;
    })
})

process.on('exit', () => stdout.write('Удачи в изучении Node.js!\n'));

process.on('SIGINT', exit)


