'use strict';

const createProxy = require('./proxy.js');

const subject = {
  hello: function () {
    return 'Hello world';
  },

  goodbye: function (sentence) {
    console.log('sentence', sentence);
  },

};

const proxy = createProxy(subject);
const res = proxy.hello();
console.log(res);
proxy.goodbye('Goodbye world');
