import Rx from 'rxjs/Rx';
import $ from 'jquery';

const myPromise = new Promise((resolve, reject) => {
 console.log('Creating Promise');
 setTimeout(() => resolve('hello from promise'), 500);
});

// myPromise.then(x => {
//   console.log(`Promise completed wiht ${x}`);
// });

const source$ = Rx.Observable.fromPromise(myPromise);

source$
  .catch(e => Rx.Observable.of(e)) // convert err into non error so completed fires
  .subscribe(
    x => console.log(x),
    x => console.log(`saw error ${x}`),
    x => console.log('completed promise'),
  )

function getUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'jsonp'
  }).promise();
}

Rx.Observable.fromPromise(getUser('carltonj2000'))
  .catch(e => Rx.Observable.of(e)) // convert err into non error so completed fires
  .subscribe(
    x => {
      console.log(`Promise data `);
      console.log(x);
      $('#promise #name').text(x.data.name);
    },
    x => console.log(`saw error ${x}`),
    x => console.log('completed fetch'),
  );

Rx.Observable.fromEvent($('#promise input'), 'keyup')
  .subscribe(
    x => {
      Rx.Observable.fromPromise(getUser(x.target.value))
        .subscribe(x => $('#promise #name').text(x.data.name))
    }
  );
