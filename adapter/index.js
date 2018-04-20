'use strict';

const level = require('level');
const fsAdapter = require('./fsAdapter');
const  db = level(__dirname + '/db', { valueEncoding: 'binary' });
const fs = fsAdapter(db);

fs.writeFile('file.txt', 'Hello', () => {
  fs.readFile('file.txt', { encoding: 'utf8' }, (err, res) => console.log(res));
});

// fs.readFile('missing.txt', { encoding: 'utf8' }, (err, res) => console.log(err));
