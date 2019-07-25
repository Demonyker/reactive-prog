import { map } from 'rxjs/operators';
import { fromEvent, merge, Observable } from 'rxjs';
import { createStore } from 'redux';

window.onload = () => {
  const widget = document.getElementsByClassName('widget__main-user');
  const content = widget[0];
  const mainContent = document.getElementsByClassName('content');

  function zapros(userInfo, numberOfUser) {
    const request = new XMLHttpRequest();
    const check = [];
    request.open('GET', `${userInfo}`);
    request.send();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const info = JSON.parse(request.responseText);
        for (let i = 0; i < numberOfUser; i += 1) {
          let k = Math.floor(Math.random() * 29) + 0;
          check.push(k);
          if (check[i - 1] === k) {
            k += 1;
          }
          const xhr = new XMLHttpRequest();
          xhr.open('GET', `${info[k].url}`);
          xhr.send();
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              const user = JSON.parse(xhr.responseText);
              content.innerHTML = `<div class="content">
          <div class="test">
          <div class="photo_text">
          <img class="github-photo" src="${user.avatar_url}')">
          <div class="github-info">
            <div class="github-info-name">${user.name}</div>
            <div class="github-info-town">
              <img src="/img/map-marker-alt-solid.svg" class="map-marker" />
              ${user.location}
            </div>
            <div class="github-info-nickname"> @${user.login}</div>
          </div>
        </div>
        <div class="right-arrow" data-id="${k}"></div>
        </div>
        <div class="trash" data-id="${k}"></div></div>${content.innerHTML}`;
            }
          };
        }
      }
    };
  }
  $('.widget__main-user').on('click', '.right-arrow', () => {
    const arrow = document.getElementsByClassName('right-arrow');
    const trash = document.getElementsByClassName('trash');
    const test = document.getElementsByClassName('test');
    for (let i = 0; i < 3; i += 1) {
      arrow[i].addEventListener('mouseenter', () => {
        if (trash[i].getAttribute('data-id') === arrow[i].getAttribute('data-id')) {
          if (getComputedStyle(trash[i]).display === 'none') {
            trash[i].style.display = 'block';
            test[i].style.right = '50px';
            arrow[i].style.left = '57px';
          }
        }
      });
      arrow[i].addEventListener('mouseleave', () => {
        if (trash[i].getAttribute('data-id') === arrow[i].getAttribute('data-id')) {
          if (getComputedStyle(trash[i]).display === 'block') {
            trash[i].style.display = 'none';
            test[i].style.right = '0px';
            arrow[i].style.left = '0px';
          }
        }
      });
      trash[i].addEventListener('mouseenter', () => {
        if (trash[i].getAttribute('data-id') === arrow[i].getAttribute('data-id')) {
          trash[i].style.display = 'block';
          test[i].style.right = '50px';
          arrow[i].style.left = '57px';
        }
      });
      trash[i].addEventListener('mouseleave', () => {
        if (trash[i].getAttribute('data-id') === arrow[i].getAttribute('data-id')) {
          if (getComputedStyle(trash[i]).display === 'block') {
            trash[i].style.display = 'none';
            test[i].style.right = '0px';
            arrow[i].style.left = '0px';
          }
        }
      });
      trash[i].onclick = function delUser() {
        mainContent[i].remove();
        zapros('https://api.github.com/users', 1);
      };
    }
  });
  const refresh1 = document.getElementsByClassName('refresh');
  const refresh = refresh1[0];
  /* const githubUsers = Observable.create((observer) => {
    observer.next('https://api.github.com/users');
  });
  const btn = fromEvent(refresh, 'click');
  const updateList = btn.pipe(
    map(() => {
      content.innerHTML = null;
      return 'https://api.github.com/users';
    }),
  );
  const work = merge(githubUsers, updateList);
  work.subscribe(res => zapros(res, 3)); */
  function gitRequest(state = 0, action) {
    switch (action.type) {
      case 'live':
        return state = action.api;
      case 'button':
        return state = action.api;
      default:
        return state;
    }
  }

  const store = createStore(gitRequest);
  store.subscribe(() => zapros(store.getState(), 3));
  store.dispatch({ type: 'live', api: 'https://api.github.com/users' });
  $('.refresh').on('click', () => {
    $('.widget__main-user').html(null);
    store.dispatch({ type: 'button', api: 'https://api.github.com/users' });
  });
};
