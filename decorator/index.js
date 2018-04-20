'use strict';

const level = require('level');
const levelSubscribe = require('./levelSubscribe');

let db = level(__dirname + '/db', { valueEncoding: 'json' });
db = levelSubscribe(db);

db.subscribe(
  { doctype: 'tweet', language: 'en' },
  (key, val) => console.log(val)
);

db.put('1', { doctype: 'tweet', text: 'Hi', language: 'en' });
db.put('1', { doctype: 'company', text: 'Hi' });
