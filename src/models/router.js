import {createStore, createEvent} from 'effector';

const defaultRoute = location.pathname === '/' ? '/recs' : location.pathname;

export const $router = createStore(defaultRoute);

export const route = createEvent();

$router.on(route, (prevRoute, nextRoute) => nextRoute);
