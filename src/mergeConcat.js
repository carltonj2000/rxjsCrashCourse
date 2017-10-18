import Rx from 'rxjs/Rx';
import $ from 'jquery';

Rx.Observable.of('hello')
  .merge(Rx.Observable.of('Carlton'))
  .subscribe(x => console.log(x));

Rx.Observable.of('hello')
  .concat(Rx.Observable.of('Carlton'))
  .subscribe(x => console.log(x));

Rx.Observable.interval(10)
  .merge(Rx.Observable.interval(5))
  .take(7)
  .subscribe(x => console.log(x));

const s1$ = Rx.Observable.interval(200).map(v => `o ${v}`).take(5);
const s2$ = Rx.Observable.interval(100).map(v => `t ${v}`).take(5);

Rx.Observable.merge(s1$, s2$).take(10).subscribe(x => console.log(`merge ${x}`));
setTimeout( x =>
Rx.Observable.concat(s1$, s2$).take(10).subscribe(x => console.log(`concat ${x}`))
, 1000)
