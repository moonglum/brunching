import { y } from 'lol';
import * as _ from 'underscore';
import { x, f } from 'es6package';

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log(`Initialized app: ${ y }`);
  _.each([ 1, 2, 3], (i) => {
    console.log(f(x, i));
  })
});
