import { fromEvent, interval } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'; 8

window.onload = () => {
  const startButton = document.querySelector('#start');
  const stopButton = document.querySelector('#stop');

  const start$ = fromEvent(startButton, 'click');
  const interval$ = interval(1000);

  const startInterval$ = start$.pipe(
    switchMap(interval$),
  ).subscribe(x => console.log(x));
};
let test = null;
fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()).then(data => console.log(data));


const githubUsers = `https://api.github.com/users?per_page=2`;

const users = ajax.getJSON(githubUsers);

const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err)
);
