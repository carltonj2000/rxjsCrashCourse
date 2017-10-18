import Rx from 'rxjs/Rx';
import $ from 'jquery';


const set = new Set([
  'Hello', 44, {title: 'My title'}
]);

const set$ = Rx.Observable.from(set);

set$.subscribe(
  v => {
    console.log(v);
  },
  e => console.log('error'),
  e => console.log('completed')
)

const map = new Map([
  [1,2],
  [3,4],
  [6,7],
]);

const map$ = Rx.Observable.from(map);

map$.subscribe(
  v => {
    console.log(v);
  },
  e => console.log('error'),
  e => console.log('completed')
)
