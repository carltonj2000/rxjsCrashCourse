import Rx from 'rxjs/Rx';
import $ from 'jquery';

const source$ = new Rx.Observable(observer => {
  console.log('watching')
  observer.next('hello world');
  observer.next('another value');
  observer.error('Something went wrong');
  setTimeout(() => {
    observer.next('yet another value');
    observer.complete();
  }, 500);
});

source$
  .catch(e => Rx.Observable.of(e)) // convert err into non error so completed fires
  .subscribe(
    x => console.log(x),
    x => console.log(`saw error ${x}`),
    x => console.log('completed'),
  )
