import {createStore, createEffect, createEvent} from 'effector';

export const $users = createStore([]);

export const swipe = createEvent();

export const loadUsers = createEffect({
  async handler({isPetOwner}) {
    const bin = isPetOwner ? '19cz2t' : 'gub79';
    const req = await fetch('https://api.myjson.com/bins/' + bin);
    return req.json();
  }
});

$users.on(loadUsers.done, (_, {result}) => {
  return [...result];
});

$users.on(swipe, (users, direction) => {
  return users.filter((user) => user !== users[0]);
});
