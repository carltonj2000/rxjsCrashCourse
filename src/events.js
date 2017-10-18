import Rx from 'rxjs/Rx';
import $ from 'jquery';

const btn = $('#event #button');
const input = $('#event #input');
const output = $('#event #output');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

btnStream$.subscribe(
  e => console.log(e),
  e => console.log('error'),
  e => console.log('completed')
)

inputStream$.subscribe(
  e => {
    console.log(e.target.value);
    output.append(e.target.value);
  },
  e => console.log('error'),
  e => console.log('complted')
)

moveStream$.subscribe(
  e => {
    console.log(e.target.value);
    output.html(`X: ${e.clientX}, Y: ${e.clientY}`);
  },
  e => console.log('error'),
  e => console.log('complted')
)
