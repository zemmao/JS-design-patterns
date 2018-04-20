'use strict';

const stampit = require('stampit');

const character = stampit()
  .props({
    name: 'anonymus',
    lifePoints: 100,
    x: 0,
    y: 0
  });

const mover = stampit()
  .methods({
    move(xIncr, yIncr) {
      this.x += xIncr;
      this.y += yIncr;
      console.log(`${ this.name } moved to [${ this.x }, ${ this.y }]`);
    }
  });

const slasher = stampit()
  .methods({
    slash(direction) {
      console.log(`${ this.name } slashed to the ${ direction }`);
    }
  });

const shooter = stampit()
  .props({
    bullets: 6
  })
  .methods({
    shoot(direction) {
      if (this.bullets > 0) {
        --this.bullets;
        console.log(`${ this.name } shoot to the ${ direction }`);
      }
    }
  })

const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const snaiper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamurai = stampit.compose(gunslinger, samurai);


module.exports = {
  runner,
  samurai,
  snaiper,
  gunslinger,
  westernSamurai
}
