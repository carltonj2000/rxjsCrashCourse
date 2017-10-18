import Rx from 'rxjs/Rx';
import $ from 'jquery';

const numbers = [33, 44, 55, 66, 77];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
  e => console.log(e),
  e => console.log('error'),
  e => console.log('completed')
)

const posts = [
  {title: "post one", body: 'body 1'},
  {title: "post two", body: 'body 2'},
  {title: "post 3", body: 'body 3'},
  {title: "post 4", body: 'body 4'},
]

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
  post => {
    console.log(post);
    $('#arrays #post').append(`<li><h3>${post.title}</h3><p>${post.body}</p></li>`);
  },
  e => console.log('error'),
  e => console.log('completed')
)
