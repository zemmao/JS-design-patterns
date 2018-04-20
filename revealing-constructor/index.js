'use strict';

const ticker = require('./ticker');

ticker.on('tick', tickCount => console.log(tickCount, 'TICK'));

// The following line would fail => ticker.emit is not a function
// ticker.emit('something', {});
