'use strict';

const subject = {
  hello: function () {
    return 'Hello world';
  },

  goodbye: function () {
    console.log('Goodbye world');
  },

};

function createProxy(subject) {
  const helloOrig = subject.hello;

  subject.hello = () => {
    console.log('this', this);
    return helloOrig() + ' world!';
  };

  return subject;
}

const proxy = createProxy(subject);
const res = proxy.hello();
console.log(res);
proxy.goodbye();
