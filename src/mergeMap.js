import Rx from 'rxjs/Rx';
import $ from 'jquery';

Rx.Observable.of('hello')
  .subscribe(x =>
    Rx.Observable.of(x + ' everyone')
      .subscribe(y => console.log(y))
  );

Rx.Observable.of('hello')
  .mergeMap(v => Rx.Observable.of(v + ' everyone'))
  .subscribe(y => console.log(y));

function getUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'jsonp'
  }).promise();
}

// cleaned up version of promis code
Rx.Observable.fromEvent($('#mergeMap input'), 'keyup')
  .switchMap(x => Rx.Observable.fromPromise(getUser(x.target.value)))
  .subscribe(x => $('#mergeMap #name').text(x.data.name));
