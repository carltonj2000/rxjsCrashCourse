import Rx from 'rxjs/Rx';
import $ from 'jquery';

Rx.Observable.interval(100)
  .take(4)
  .map(v => v * 2)
  .subscribe(
    x => console.log(x),
    x => console.log(`interval error ${x}`),
    x => console.log(`interval completed`)
  );

Rx.Observable.from(['John', 'Tom', 'Shawn'])
  .map(v => v.toUpperCase())
  .map(v => `I am ${v}`)
  .subscribe(
    x => console.log(x),
    x => console.log(`interval error ${x}`),
    x => console.log(`interval completed`)
  )

function getUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'jsonp'
  }).promise();
}

Rx.Observable.fromPromise(getUser('carltonj2000'))
  .map(user => user.data )
  .map(user => user.name )
  .subscribe(
    x => {
      console.log(`Promise data `);
      console.log(x);
    },
    x => console.log(`saw error ${x}`),
    x => console.log('completed fetch'),
  );

const users = [
  {name: 'Will', age: 34},
  {name: 'Mike', age: 33},
  {name: 'Paul', age: 35},
];
Rx.Observable.from(users)
  .pluck('name')
  .subscribe(
    x => console.log(x),
    x => console.log(`interval error ${x}`),
    x => console.log(`interval completed`)
  )
