import Rx from 'rxjs/Rx';
import $ from 'jquery';

Rx.Observable.interval(100)
  .take(4)
  .subscribe(
    x => console.log(x),
    x => console.log(`interval error ${x}`),
    x => console.log(`interval completed`)
  )

Rx.Observable.timer(1000, 100)
  .take(4)
  .subscribe(
    x => console.log(x),
    x => console.log(`timer error ${x}`),
    x => console.log(`timer completed`)
  )

Rx.Observable.range(0, 5)
    .subscribe(
      x => console.log(x),
      x => console.log(`range error ${x}`),
      x => console.log(`range completed`)
    )
